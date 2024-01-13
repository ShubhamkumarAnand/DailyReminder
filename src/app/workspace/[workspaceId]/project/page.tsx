import Link from "next/link";
import type { FC } from "react";
import ProjectList from "~/app/workspace/[workspaceId]/project/_component/ProjectList";

import { Button } from "~/components/ui/button";

interface ProjectListingProps {
  params: {
    workspaceId: string;
  };
}

const ProjectListing: FC<Readonly<ProjectListingProps>> = ({ params }) => {
  const { workspaceId } = params;
  return (
    <>
      <p>Details about the all projects</p>
      <Button>
        <Link href=".">Go Back</Link>
      </Button>
      <div className="flex flex-col gap-4 my-5">
        <ProjectList workspaceId={workspaceId} />
      </div>
    </>
  );
};

export default ProjectListing;
