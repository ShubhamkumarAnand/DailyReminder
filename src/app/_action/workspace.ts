"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "~/server/database";

export async function getWorkspace(userId: string) {
  try {
    const workspace = await db
      .selectFrom("Workspace")
      .where("Workspace.ownerId", "=", userId)
      .select(["id", "name"])
      .orderBy("createdAt desc")
      .execute();
    return workspace;
  } catch (err) {
    console.error(err);
    return { error: "Invalid credentials" };
  }
}

export async function createNewWorkspace(userId: string, formData: FormData) {
  const name = formData.get("name") as string;

  try {
    await db
      .insertInto("Workspace")
      .values({
        name: name as string,
        ownerId: userId,
        updatedAt: new Date().toISOString(),
      })
      .execute();
    revalidatePath("/workspace");
    return { success: "Successfully Created Workspace" };
  } catch (err) {
    console.log(err);
    return { error: "Error creating the workspace" };
  }
}

export async function updateWorkspaceName(
  userId: string,
  workspaceName: string,
  formData: FormData
) {
  const newWorkspaceName = formData.get("name") as string;

  try {
    await db
      .updateTable("Workspace")
      .where((eb) =>
        eb.and([
          eb("Workspace.ownerId", "=", userId),
          eb("Workspace.name", "=", workspaceName),
        ])
      )
      .set({
        name: newWorkspaceName,
        updatedAt: new Date().toISOString(),
      })
      .execute();

    revalidatePath("/workspace");
    return { success: "Workspace name updated" };
  } catch (error) {
    console.log(error);
    return { error: "Error updating the name" };
  }
}

export async function deleteWorkspace(userId: string, name: string) {
  try {
    await db
      .deleteFrom("Workspace")
      .where((eb) =>
        eb.and([
          eb("Workspace.ownerId", "=", userId),
          eb("Workspace.name", "=", name),
        ])
      )
      .execute();

    revalidatePath("/workspace");
    return { success: "Updated the workspace name" };
  } catch (e) {
    console.log(e);
    return { error: "Error Deleting Workspace" };
  }
}
