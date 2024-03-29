"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/database";

export const getProjects = async (workspaceId: string) => {
  try {
    const projects = await db
      .selectFrom("Project")
      .selectAll()
      .where("workspaceId", "=", workspaceId)
      .orderBy("updatedAt desc")
      .execute();

    return projects;
  } catch (err) {
    console.error(err);
    return { error: "Invalid Workspace" };
  }
};

export const getProjectById = async (
  projectId: string,
  workspaceId: string
) => {
  try {
    const project = await db
      .selectFrom("Project")
      .selectAll()
      .where("id", "=", projectId)
      .where("workspaceId", "=", workspaceId)
      .execute();

    console.log(project);
    return project;
  } catch (err) {
    console.error(err);
    return { error: "Invalid project data" };
  }
};

export const createNewProject = async (
  workspaceId: string,
  formData: FormData
) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  try {
    const project = await db
      .insertInto("Project")
      .values({
        workspaceId,
        name,
        description,
        updatedAt: new Date().toISOString(),
      })
      .returning("id")
      .execute();
    console.warn("Successful");
    console.log(project);

    revalidatePath(`/workspace/${workspaceId}`);
    return { success: "successfully created the project" };
  } catch (e) {
    console.error("Error: ", e);
    return { error: "Failed to create the project" };
  }
};

export const deleteProject = async (projectId: string, workspaceId: string) => {
  try {
    const project = await db
      .deleteFrom("Project")
      .where("id", "=", projectId)
      .returning("id")
      .execute();
    console.log(project[0].id);
    revalidatePath(`/workspace/${workspaceId}`);
    return { success: "Project Deleted Successfully" };
  } catch (e) {
    console.error("Error: ", e);
    return { error: "Failed to delete the project" };
  }
};
