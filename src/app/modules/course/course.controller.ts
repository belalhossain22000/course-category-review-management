
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./course.service";

const createCourse = catchAsync(async (req, res) => {
    const result = await CourseServices.createCourseIntoDB(
        req.body,
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Course created successfully',
        data: result,
    });
});

//get all course with searching and filtering

const getAllCourse = catchAsync(async (req, res) => {
    const result = await CourseServices.getAllCourseFromDB();


    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Courses retrieved successfully',
        data: result,
    });
});
const getSingleCourse = catchAsync(async (req, res) => {
    const courseId = req.params.courseId
    const result = await CourseServices.getSingleCourseFromDB(courseId);


    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Course and Reviews retrieved successfully',
        data: result,
    });
});

export const CourseControllers = {
    createCourse,
    getAllCourse,
    getSingleCourse
};
