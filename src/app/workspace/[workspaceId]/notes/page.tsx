import type { FC } from "react";
import NotesList from "~/app/workspace/[workspaceId]/notes/_component/NotesList";
import CreateNewNote from "~/app/workspace/[workspaceId]/notes/_component/create-new-note";

interface NotesProps {
  params: {
    workspaceId: string;
  };
}

const Notes: FC<Readonly<NotesProps>> = async ({ params }) => {
  const { workspaceId } = params;

  return (
    <div className="flex flex-col gap-5">
      <CreateNewNote workspaceId={workspaceId} />
      <NotesList workspaceId={workspaceId} />
    </div>
  );
};

export default Notes;
