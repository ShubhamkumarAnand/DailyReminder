import Link from "next/link";
import { deleteProject, getProjects } from "~/app/_action/project";
import { Button } from "~/components/ui/button";

const ProjectList = async ({ workspaceId }: { workspaceId: string }) => {
  const projects = await getProjects(workspaceId);
  return (
    <>
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        {projects.slice(0, 4).map((project) => (
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
      <div className="flex justify-end">
        <Button variant="secondary">
          <Link href={`/workspace/${workspaceId}/project`}>More Projects</Link>
        </Button>
      </div>
    </>
  );
};

export default ProjectList;
