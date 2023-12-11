
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

const createCategory = catchAsync(async (req, res) => {
    const result = await CategoryServices.createCategoryIntoDB(
        req.body,
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category is created successfully',
        data: result,
    });
});

export const CAtegoryControllers = {
    createCategory
};