import * as z from "zod";

export const workspace = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const project = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

export const goals = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

export const note = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  tags: z.string().array(),
});

export const quote = z.object({
  quote: z.string().min(1, {
    message: "Quote cannot be empty",
  }),
  description: z.string().optional(),
});
