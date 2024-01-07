import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { createNewWorkspace } from "~/app/_action/workspace";
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

const CreateNewWorkspacePage = () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  return (
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
          <form action={createNewWorkspace.bind(null, userId)}>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Workspace
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Workspace</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateNewWorkspacePage;
