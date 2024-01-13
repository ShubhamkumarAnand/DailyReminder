import type { FC } from "react";
import { getProjectById } from "~/app/_action/project";

interface ProjectDetailProps {
  projectId: string;
  workspaceId: string;
}

const ProjectDetail: FC<Readonly<ProjectDetailProps>> = async ({
  projectId,
  workspaceId,
}) => {
  const project = await getProjectById(projectId, workspaceId);
  if (!project) return "Invalid Project Id";
  return (
    <div>
      <p>{JSON.stringify(project)}</p>
    </div>
  );
};

export default ProjectDetail;
