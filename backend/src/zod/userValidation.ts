import {z} from "zod";

export const signupSchema = z.object({
    body: z.object({ 
        firstName: z.string(),
        lastName: z.string(),
        username: z.email(),
        password: z.string()})
   
})

export const loginSchema = z.object({
    body: z.object({
    username : z.email(),
    password: z.string()
    })
    
})
