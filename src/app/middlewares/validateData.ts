import { z, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateData = (schema: z.ZodObject<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({ error });
            } else {
                res.status(500).json({ error: 'Internal server error' });
            }
        }
    };
};


