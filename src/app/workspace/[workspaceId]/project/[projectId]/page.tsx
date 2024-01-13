import Link from "next/link";
import type { FC } from "react";
import ProjectDetail from "~/app/workspace/[workspaceId]/project/[projectId]/_component/ProjectDetail";
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
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center justify-center">
        <Button>
          <Link href="..">Go Back to Workspace</Link>
        </Button>
        <Button>
          <Link href=".">Trello Board</Link>
        </Button>
      </div>
      <ProjectDetail projectId={projectId} workspaceId={workspaceId} />
    </div>
  );
};

export default Project;
