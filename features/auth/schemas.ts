import z from "zod";

export const loginSchema = z.object({
    email: z.email("Поле обязательно для заполнения"),
    password: z.string()
        .min(5, "Пароль должен состоять минимум из 5 символов")
        .max(32, "Допустимо максимум 32 символа"),
});

export const signupSchema = z.object({
    name: z.string()
        .min(1, "Введите имя")
        .max(32, "Допустимо максимум 32 символа"),
    email: z.email("Поле обязательно для заполнения"),
    password: z.string()
        .min(5, "Пароль должен состоять минимум из 5 символов")
        .max(32, "Допустимо максимум 32 символа"),
});