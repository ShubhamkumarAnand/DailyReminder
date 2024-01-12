import type { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<Readonly<AuthLayoutProps>> = ({ children }) => {
  return (
    <div className="flex justify-center items-center mt-16">{children}</div>
  );
};

export default AuthLayout;
