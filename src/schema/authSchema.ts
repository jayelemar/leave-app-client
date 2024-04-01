import z from "zod";
import validator from "validator";

export type FormData = z.infer<typeof RegisterSchema>;

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, "First name must be atleast 2 characters")
      .max(45, "First name must be less than 45 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters ")
      .max(50, "Password must be less than 50 characters"),
    confirmPassword: z
      .string()
      .min(1, "Please input a confirm password")
      .max(50, "Password must be less than 50 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: [ "confirmPassword"],
  });

  export const LoginSchema = z.object({
    email: z
      .string()
      .email("Please enter a valid email address"),
    password: z.string({
      required_error: "Please enter your password"
    }).min(1, 'Please enter password.')
  });