import type { FC } from "react";
import CreateProject from "~/app/workspace/[workspaceId]/_components/CreateProject";
import ProjectList from "~/app/workspace/[workspaceId]/_components/ProjectList";

interface ProjectsProps {
  workspaceId: string;
}

const Projects: FC<Readonly<ProjectsProps>> = ({ workspaceId }) => {
  return (
    <div className="flex flex-col gap-5">
      <CreateProject workspaceId={workspaceId} />
      <ProjectList workspaceId={workspaceId} />
    </div>
  );
};

export default Projects;
