import type { FC } from "react";

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout: FC<Readonly<WorkspaceLayoutProps>> = ({ children }) => {
  return <div className="mx-32">{children}</div>;
};

export default WorkspaceLayout;
