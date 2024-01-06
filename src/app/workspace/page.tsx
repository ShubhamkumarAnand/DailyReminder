import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/database";

const WorkspaceHomePage = async () => {
  const workspaces = await db.selectFrom("Workspace").selectAll().execute();
  return (
    <div>
      <p>This is workspace homepage</p>
      <UserButton afterSignOutUrl="/" />
      {workspaces &&
        workspaces.map((workspace) => (
          <div
            className="border-2 border-r-4 px-2 py-3 border-b-4 border-gray-300 max-w-md font-semibold flex justify-center rounded-md"
            key={workspace.id}
          >
            <Link prefetch href={`/workspace/${workspace.name}`}>
              {workspace.name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default WorkspaceHomePage;
