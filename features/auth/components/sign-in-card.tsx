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
import { loginSchema } from '../schemas';
import { useLogin } from "../api/use-login";
import { useRouter } from 'next/navigation';


export const SignInCard = () => {
    const router = useRouter();
    const loginMutation = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        console.log(data)

        try {
            await loginMutation.mutateAsync(data);

            router.push("/");
        } catch (error) {
            console.error("Ошибка авторизации:", error);
            // Todo: show toast
        }
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none ring-0">
            <CardHeader className="flex items-center justify-center text-center p-7 pb-3">
                <CardTitle className="text-2xl">
                    Авторизация
                </CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className='p-7 pt-3 pb-3'>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FieldGroup>
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
                        Войти
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className='p-7 pt-2 pb-3 flex flex-col gap-y-4'>
                <Button disabled={false} variant={"secondary"} size="lg" className='w-full' >
                    <FcGoogle className='mr-2 size-5' />
                    Login with Google
                </Button>
                <Button disabled={false} variant={"secondary"} size="lg" className='w-full' >
                    <FaGithub className='mr-2 size-5' />
                    Login with Github
                </Button>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className='p-7 pt-2 flex items-center justify-center'>
                <p>
                    Нет аккаунта?
                    {" "}
                    <Link className='text-blue-700' href="/sign-up"> Зарегистрироваться
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};
