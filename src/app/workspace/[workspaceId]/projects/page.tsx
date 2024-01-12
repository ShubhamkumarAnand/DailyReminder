import Link from "next/link";
import type { FC } from "react";
import { Button } from "~/components/ui/button";

interface ProjectListingProps {}

const ProjectListing: FC<Readonly<ProjectListingProps>> = ({}) => {
  return (
    <>
      <p>Details about the all projects</p>
      <Button>
        <Link href=".">Go Back</Link>
      </Button>
    </>
  );
};

export default ProjectListing;
