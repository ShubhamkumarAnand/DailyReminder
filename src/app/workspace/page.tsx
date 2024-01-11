import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CreateNewWorkspacePage from "~/app/workspace/CreateNewWorkspace";
import WorkSpaceList from "~/app/workspace/WorkSpaceList";

const WorkspaceHomePage = async () => {
  const { userId } = auth();
  if (!userId) return redirect("/sign-in");
  return (
    <div className="mx-28">
      <CreateNewWorkspacePage userId={userId} />
      <WorkSpaceList userId={userId} />
    </div>
  );
};

export default WorkspaceHomePage;
