import Link from "next/link";
import { useParams } from "next/navigation";
import { string } from "zod";
import Projects from "~/app/workspace/[workspaceId]/_components/Projects";
import { Button } from "~/components/ui/button";

const WorkSpaceHome = ({ params }: { params: { workspaceId: string } }) => {
  const workspaceId = params.workspaceId as string;

  return (
    <>
      <p>Dashboard of all your notes and projects</p>
      <Button>
        <Link href=".">go Back</Link>
      </Button>
      {/* Todo */}
      {/* Projects */}
      <Projects workspaceId={workspaceId} />
      {/* Notes */}
    </>
  );
};

export default WorkSpaceHome;
