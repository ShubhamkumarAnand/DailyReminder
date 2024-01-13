import Link from "next/link";
import { deleteProject, getProjects } from "~/app/_action/project";
import { Button } from "~/components/ui/button";

const ProjectList = async ({ workspaceId }: { workspaceId: string }) => {
  const projects = await getProjects(workspaceId);
  if (!projects) return null;
  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      {projects.map((project) => (
        <div
          className="p-3 rounded-xl border-2 border-black max-w-md flex items-center justify-between"
          key={project.id}
        >
          <Link href={`/workspace/${workspaceId}/project/${project.id}`}>
            {project.name}
          </Link>
          <form action={deleteProject.bind(null, project.id, workspaceId)}>
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
