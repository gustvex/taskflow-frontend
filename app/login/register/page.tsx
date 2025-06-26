'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Form } from "@/components/ui/form"; 
import { FormInputText } from "@/components/form/formInputText";
import { FormInputPassword } from "@/components/form/formInputPassword";
import { registerSchema } from "@/lib/validations/auth-schema";


type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const router = useRouter();

    const form = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data: RegisterData) => {
        try {
            await axios.post("http://localhost:3001/auth/register", {
                email: data.email,
                password: data.password,
            });
            router.push("/login");
        } catch (error) {
            alert("Erro no cadastro");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm p-4">
                <CardHeader className="text-2xl font-bold text-center">Cadastro</CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormInputText
                                control={form.control}
                                name="email"
                                label="E-mail"
                                placeholder="Digite seu e-mail"
                                required
                            />
                            <FormInputPassword
                                control={form.control}
                                name="password"
                                label="Senha"
                                placeholder="Digite sua senha"
                                required
                            />

                            <FormInputPassword
                                control={form.control}
                                name="confirmPassword"
                                label="Confirme a senha"
                                placeholder="Confirme sua senha"
                                required
                            />

                            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Cadastrando..." : "Cadastrar"}
                            </Button>

                            <p className="text-center text-sm">
                                Já tem uma conta?{" "}
                                <a href="/login" className="text-blue-600 hover:underline">
                                    Entrar
                                </a>
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
