import type { FC } from "react";
import { getAllNotes } from "~/app/_action/notes";

interface NotesListProps {
  workspaceId: string;
  projectId?: string;
}

const NotesList: FC<Readonly<NotesListProps>> = async ({
  workspaceId,
  projectId,
}) => {
  const notes = await getAllNotes(workspaceId);
  return (
    <>
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        {notes.map((note) => (
          <div
            className="border-2 border-gray-200 p-3 rounded-md"
            key={note.id}
          >
            {note.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
