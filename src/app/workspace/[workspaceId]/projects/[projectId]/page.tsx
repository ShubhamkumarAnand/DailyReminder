import Link from "next/link";
import type { FC } from "react";
import { Button } from "~/components/ui/button";

interface ProjectProps {
  params: {
    workspaceId: string;
    projectId: string;
  };
}

const Project: FC<Readonly<ProjectProps>> = ({ params }) => {
  const { workspaceId, projectId } = params;
  return (
    <div className="flex gap-5">
      <Button>
        <Link href=".">Go Back to Workspace</Link>
      </Button>
      <Button>
        <Link href="..">Trello Board</Link>
      </Button>
      <p>{workspaceId}</p>
      <p>{projectId}</p>
    </div>
  );
};

export default Project;
