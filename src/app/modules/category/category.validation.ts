import { z } from 'zod';

const createCategoryValidationSchema = ({
    name: z.string({
        invalid_type_error: 'category name must be string',
    })
})
const updatedCategoryValidationSchema = ({
    name: z.string({
        invalid_type_error: 'category name must be string',
    })
})

export const CategoryValidation = {
    createCategoryValidationSchema,
    updatedCategoryValidationSchema,
};