import { z } from 'zod';
import mongoose from 'mongoose';


const ObjectIdSchema = z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: 'Invalid ObjectId',
});

// Zod schema for the Review model
const CreteReviewValidationSchema = z.object({
    courseId: ObjectIdSchema,
    rating: z.number().min(1).max(5),
    review: z.string(),
});

export const ReviewValidation = {
    CreteReviewValidationSchema
};
