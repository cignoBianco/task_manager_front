interface AuthLayoutPropd {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutPropd) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default AuthLayout;