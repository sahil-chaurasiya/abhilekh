import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  age: z.coerce
    .number({ invalid_type_error: "Age must be a number" })
    .int("Age must be a whole number")
    .min(1, "Please enter a valid age")
    .max(120, "Please enter a valid age"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[+]?[\d\s-]{7,20}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address"),
  preferredDate: z
    .string()
    .min(1, "Please choose a preferred date")
    .refine((val) => new Date(val).getTime() >= new Date().setHours(0, 0, 0, 0), {
      message: "Please choose a date from today onward",
    }),
  preferredTime: z.string().min(1, "Please choose a preferred time"),
  symptoms: z
    .string()
    .trim()
    .min(10, "Please describe your symptoms in a little more detail")
    .max(1000, "Please keep this under 1000 characters"),
  additionalNotes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please enter a message with a little more detail")
    .max(1500, "Please keep this under 1500 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
