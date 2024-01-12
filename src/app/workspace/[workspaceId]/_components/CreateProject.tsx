import type { FC } from "react";
import { createNewProject } from "~/app/_action/project";
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

interface CreateProjectProps {
  workspaceId: string;
}

const CreateProject: FC<Readonly<CreateProjectProps>> = ({ workspaceId }) => {
  return (
    <>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add a new workspace</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Workspace</DialogTitle>
              <DialogDescription>
                Add a new workspace for better management
              </DialogDescription>
            </DialogHeader>
            <form action={createNewProject.bind(null, workspaceId)}>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Project Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    className="col-span-3"
                    // disabled={isPending}
                  />
                </div>
              </div>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="name" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
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
                  Create Project
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CreateProject;
