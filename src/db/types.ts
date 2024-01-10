import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { Tag, NoteStatus } from "./enums";

export type goals = {
    id: Generated<string>;
    title: string;
    description: string;
    updatedAt: Timestamp;
};
export type Notes = {
    id: Generated<string>;
    tags: string[];
    title: string;
    description: string;
    status: Generated<NoteStatus>;
    createdAt: Generated<Timestamp>;
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
export type Quotes = {
    id: Generated<string>;
    quote: string;
    description: string;
    createdAt: Generated<Timestamp>;
};
export type Workspace = {
    id: Generated<string>;
    name: string;
    ownerId: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type DB = {
    goals: goals;
    Notes: Notes;
    Progress: Progress;
    Project: Project;
    Quotes: Quotes;
    Workspace: Workspace;
};
