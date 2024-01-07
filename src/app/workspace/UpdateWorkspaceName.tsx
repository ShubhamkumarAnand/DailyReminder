import { updateWorkspaceName } from "~/app/_action/workspace";
import { Label } from "~/components/ui/label";
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

const UpdateWorkspaceName = ({
  userId,
  workspaceName,
}: {
  userId: string;
  workspaceName: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Name of Workspace</DialogTitle>
          <DialogDescription>
            Edit the name for the new workspace
          </DialogDescription>
        </DialogHeader>
        <form action={updateWorkspaceName.bind(null, userId, workspaceName)}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Workspace
              </Label>
              <Input type="text" id="name" name="name" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Update Workspace</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateWorkspaceName;
