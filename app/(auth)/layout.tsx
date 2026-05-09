import Image from 'next/image';
interface AuthLayoutPropd {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutPropd) => {
    return (
        <div>
            <Image src="/logo.svg" height={50} width={100} alt="TMLogo" />
            {children}
        </div>
    );
}

export default AuthLayout;