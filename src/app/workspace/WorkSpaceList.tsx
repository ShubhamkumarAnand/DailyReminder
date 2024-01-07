import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getWorkspace } from "~/app/_action/workspace";
import DeleteWorkspace from "~/app/workspace/DeleteWorkspace";
import UpdateWorkspaceName from "~/app/workspace/UpdateWorkspaceName";

const WorkSpaceList = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const workspaces = await getWorkspace(userId);
  return (
    <div className="mt-16">
      <div className="grid grid-flow-row grid-cols-3 gap-5">
        {workspaces &&
          workspaces.map((workspace) => (
            <div
              className="flex items-center justify-between max-w-lg px-4 py-3 font-semibold border-2 rounded-xl border-slate-300"
              key={workspace.id}
            >
              <Link
                prefetch
                href={`/workspace/${workspace.name}`}
                className="text-3xl text-orange-700"
              >
                {workspace.name}
              </Link>
              <div className="flex items-center gap-5">
                <UpdateWorkspaceName
                  userId={userId}
                  workspaceName={workspace.name}
                />
                <DeleteWorkspace
                  userId={userId}
                  workspaceName={workspace.name}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkSpaceList;
