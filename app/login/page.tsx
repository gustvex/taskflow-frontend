'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Form } from '@/components/ui/form';
import { FormInputText } from "@/components/form/formInputText";
import { loginSchema } from "@/lib/validations/auth-schema";



type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const router = useRouter();

    const form = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginData) => {
        try {
            const res = await axios.post("http://localhost:3001/auth/login", data);
            localStorage.setItem("token", res.data.token);
            router.push("/dashboard");
        } catch (err) {
            alert("Login inválido");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Card className="w-full max-w-sm p-4">
                <CardHeader className="text-2xl font-bold text-center">Login</CardHeader>
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

                            <FormInputText
                                control={form.control}
                                name="password"
                                label="Senha"
                                placeholder="Digite sua senha"
                                required
                            />

                            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
                            </Button>

                            <p className="text-center text-sm">
                                Não tem uma conta?{" "}
                                <a href="login/register" className="text-blue-600 hover:underline">
                                    Cadastre-se
                                </a>
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
