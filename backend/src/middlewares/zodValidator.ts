import type { Request, Response, NextFunction } from "express";
import type { AnyZodObject } from "zod/v3";

export const validate = (schema : AnyZodObject) => 
    (req: Request, res:Response, next: NextFunction)=>{
        try {
            schema.parse({
                body: req.body
            });
            next()
        } catch (error:any) {
            return res.status(400).json({
                message: error.errors
            })
        }
       
}

// [errors] :: is containing a collection of specific validation or operational error details, commonly used in API responses to explain why a request failed