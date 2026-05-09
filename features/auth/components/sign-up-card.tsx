import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { DottedSeparator } from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import {
    Field,
    FieldError,
    FieldGroup
} from "@/components/ui/field"
import Link from 'next/link';

const formSchema = z.object({
    name: z.string()
        .min(1, "Введите имя")
        .max(32, "Допустимо максимум 32 символа"),
    email: z.email("Поле обязательно для заполнения"),
    password: z.string()
        .min(5, "Пароль должен состоять минимум из 5 символов")
        .max(32, "Допустимо максимум 32 символа"),
});

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none ring-0">
            <CardHeader className="fle flex-col items-center justify-center text-center p-7 pb-3">
                <CardTitle className="text-2xl">
                    Регистрация
                </CardTitle>
                <CardDescription>
                    Регистрируясь, вы соглашаетесь с{" "}
                    <Link href="/privacy">
                        <span className='text-blue-700'>Политикой кофиденциальности</span>
                    </Link>{" "}<br />
                    и даёте согласие на{" "}
                    <Link href="/terms">
                        <span className='text-blue-700'>Обработку персональных данных</span>
                    </Link>
                    .
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className='p-7 pt-3 pb-3'>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) =>
                                <Field>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder='Введите ваше имя'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            }
                        />

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) =>
                                <Field>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder='Введите email'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            }
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) =>
                                <Field>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder='Введите пароль'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            }
                        />
                    </FieldGroup>
                    <Button disabled={false} size="lg" className='w-full' >
                        Зарегистрироваться
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className='p-7 pt-2 flex flex-col gap-y-4'>
                <Button disabled={false} variant={"secondary"} size="lg" className='w-full' >
                    <FcGoogle className='mr-2 size-5' />
                    Login with Google
                </Button>
                <Button disabled={false} variant={"secondary"} size="lg" className='w-full' >
                    <FaGithub className='mr-2 size-5' />
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    );
};