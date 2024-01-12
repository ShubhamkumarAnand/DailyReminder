import type { FC } from "react";
import { createNewNote } from "~/app/_action/notes";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

interface CreateNewNoteProps {
  workspaceId: string;
}

const CreateNewNote: FC<Readonly<CreateNewNoteProps>> = ({ workspaceId }) => {
  return (
    <>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Note</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Note</DialogTitle>
              <DialogDescription>
                Immediately capture your thoughts
              </DialogDescription>
            </DialogHeader>
            <form action={createNewNote.bind(null, workspaceId)}>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Note Title
                  </Label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    className="col-span-3"
                    // disabled={isPending}
                  />
                </div>
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Note Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    className="col-span-3"
                    // disabled={isPending}
                  />
                </div>
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Note Tag
                  </Label>
                  <Input
                    type="text"
                    id="tag"
                    name="tag"
                    className="col-span-3"
                    // disabled={isPending}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  // disabled={isPending}
                  className="bg-orange-400"
                >
                  Create Note
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CreateNewNote;
