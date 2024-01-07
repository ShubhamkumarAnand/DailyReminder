import CreateNewWorkspacePage from "~/app/workspace/CreateNewWorkspace";
import WorkSpaceList from "~/app/workspace/WorkSpaceList";

const WorkspaceHomePage = async () => {
  return (
    <div className="mx-28">
      <CreateNewWorkspacePage />
      <WorkSpaceList />
    </div>
  );
};

export default WorkspaceHomePage;
