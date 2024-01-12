"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/database";

export const getAllNotes = async (workspaceId: string) => {
  const notes = await db
    .selectFrom("Note")
    .where("workspaceId", "=", workspaceId)
    .selectAll()
    .execute();

  return notes;
};

export const createNewNote = async (
  workspaceId: string,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const tag = formData.get("tag") as string;
  try {
    await db
      .insertInto("Note")
      .values({
        title,
        description,
        tag,
        workspaceId,
      })
      .execute();
    console.log("Successful");
    revalidatePath(`/workspace/${workspaceId}/notes`);
    return { success: "Successfully created the project" };
  } catch (err) {
    console.error(err);
    return { error: "Failed to create a note" };
  }
};
