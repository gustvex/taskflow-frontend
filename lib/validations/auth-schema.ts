import { z } from "zod";
import { requiredString } from "./rules";

export const loginSchema = z.object({
    email: requiredString().email("E-mail inválido"),
    password: requiredString().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>;

// Schema para registro
export const registerSchema = z
    .object({
        email: requiredString().email("Digite um e-mail válido"),
        password: requiredString().min(6, "A senha deve ter no mínimo 6 caracteres"),
        confirmPassword: requiredString().min(6, "Confirme a senha"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não conferem",
        path: ["confirmPassword"],
    });

export type RegisterData = z.infer<typeof registerSchema>;
