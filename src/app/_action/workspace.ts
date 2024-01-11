"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/database";

export async function getWorkspace(userId: string) {
  const workspace = await db
    .selectFrom("Workspace")
    .where("Workspace.ownerId", "=", userId)
    .select(["id", "name"])
    .orderBy("createdAt desc")
    .execute();
  return workspace;
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
  } catch (err) {
    console.log(err);
    throw new Error("Error creating the workspace");
  }
  return revalidatePath("/workspace");
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

    return revalidatePath("/workspace");
  } catch (error) {
    console.log(error);
    throw new Error("Error updating the name");
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

    return revalidatePath("/workspace");
  } catch (e) {
    console.log(e);
    throw new Error("Error Deleting Workspace");
  }
}
