import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { NoteStatus, Tag } from "./enums";

export type Goal = {
    id: Generated<string>;
    title: string;
    description: string;
    userId: string;
    updatedAt: Timestamp;
    workspaceId: string | null;
};
export type Note = {
    id: Generated<string>;
    title: string;
    description: string;
    tag: string;
    status: Generated<NoteStatus>;
    createdAt: Generated<Timestamp>;
    workspaceId: string | null;
    projectId: string | null;
};
export type Progress = {
    id: Generated<string>;
    name: string;
    isComplete: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    projectId: string | null;
};
export type Project = {
    id: Generated<string>;
    name: string;
    description: string;
    statusTag: Generated<Tag>;
    isCompleted: Generated<boolean>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    workspaceId: string | null;
};
export type Quote = {
    id: Generated<string>;
    quote: string;
    description: string;
    userId: string;
    createdAt: Generated<Timestamp>;
    workspaceId: string | null;
};
export type Workspace = {
    id: Generated<string>;
    name: string;
    ownerId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type DB = {
    Goal: Goal;
    Note: Note;
    Progress: Progress;
    Project: Project;
    Quote: Quote;
    Workspace: Workspace;
};
