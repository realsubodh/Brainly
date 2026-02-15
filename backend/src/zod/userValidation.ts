import {z} from "zod";

export const signupSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.email(),
    password: z.string()
})

export const loginSchema = z.object({
    username : z.email(),
    password: z.string()
})