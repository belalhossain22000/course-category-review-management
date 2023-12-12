import { z } from 'zod';

//tags validtion
const TagValidationSchema = z.object({
    name: z.string().nonempty(),
    isDeleted: z.boolean(),
});

//Create course validation
const CreateCourseValidationSchema = z.object({
    title: z.string().nonempty(),
    instructor: z.string().nonempty(),
    categoryId: z.string(),
    price: z.number().positive(),
    tags: z.array(TagValidationSchema),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    durationInWeeks: z.number().positive(),
    details: z.object({
        level: z.string(),
        description: z.string(),
    }),
});

const UpdateValidationCourseSchema = z.object({
    title: z.string().optional(),
    instructor: z.string().optional(),
    categoryId: z.string().optional(),
    price: z.number().positive().optional(),
    tags: z.array(TagValidationSchema).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    language: z.string().optional(),
    provider: z.string().optional(),
    durationInWeeks: z.number().positive().optional(),
    details: z.object({
        level: z.string().optional(),
        description: z.string().optional(),
    }),
});

export const CourseValidation = {
    CreateCourseValidationSchema,
    UpdateValidationCourseSchema
}
