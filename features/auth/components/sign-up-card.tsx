import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

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
import Link from 'next/link';

export const SignUpCard = () => {
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
                <form className='space-y-4'>
                    <Input
                        required
                        type="text"
                        value={""}
                        onChange={() => { }}
                        placeholder='Введите ваше имя'
                        disabled={false}
                    />
                    <Input
                        required
                        type="email"
                        value={""}
                        onChange={() => { }}
                        placeholder='Введите email'
                        disabled={false}
                    />
                    <Input
                        required
                        type="passowrd"
                        value={""}
                        onChange={() => { }}
                        placeholder='Введите пароль'
                        disabled={false}
                        min={8}
                        max={256}
                    />
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