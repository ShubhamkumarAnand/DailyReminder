export const Tag = {
    PLANNED: "PLANNED",
    INPROGRESS: "INPROGRESS",
    DONE: "DONE",
    ARCHIVED: "ARCHIVED"
} as const;
export type Tag = (typeof Tag)[keyof typeof Tag];
export const NoteStatus = {
    CAPTURED: "CAPTURED",
    PROCESSED: "PROCESSED",
    ARCHIVED: "ARCHIVED"
} as const;
export type NoteStatus = (typeof NoteStatus)[keyof typeof NoteStatus];
