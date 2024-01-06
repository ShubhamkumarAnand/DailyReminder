export const Tag = {
    PLANNED: "PLANNED",
    INPROGRESS: "INPROGRESS",
    DONE: "DONE",
    ARCHIVED: "ARCHIVED"
} as const;
export type Tag = (typeof Tag)[keyof typeof Tag];
