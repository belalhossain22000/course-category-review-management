import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.model";




const createCategoryIntoDB = async (payload: TCategory) => {
    const result = await CategoryModel.create(payload);
    return result;
};

export const CategoryServices = {
    createCategoryIntoDB
};
