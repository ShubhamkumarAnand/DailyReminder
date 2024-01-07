import { deleteWorkspace } from "~/app/_action/workspace";
import { Button } from "~/components/ui/button";

const DeleteWorkspace = ({
  workspaceName,
  userId,
}: {
  workspaceName: string;
  userId: string;
}) => {
  return (
    <form action={deleteWorkspace.bind(null, userId, workspaceName)}>
      <Button type="submit">Delete</Button>
    </form>
  );
};

export default DeleteWorkspace;
