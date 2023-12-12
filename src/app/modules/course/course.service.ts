
import mongoose from "mongoose";
import { TCourse } from "./course.interface";
import { CourseModel } from "./course.model";



//create course services
const createCourseIntoDB = async (payload: TCourse) => {

    const { startDate, endDate } = payload;

    // Calculate durationInWeeks
    const start = new Date(startDate);
    const end = new Date(endDate);
    const millisecondsInWeek = 604800000;
    const durationInWeeks = Math.ceil((end.getTime() - start.getTime()) / millisecondsInWeek);

    //courseDataWithDuration
    const courseDataWithDuration: TCourse & { durationInWeeks: number } = {
        ...payload,
        durationInWeeks,
    };
    const result = await CourseModel.create(courseDataWithDuration);
    return result;
};

//get all course with searching and filtering

const getAllCourseFromDB = async () => {
    const result = await CourseModel.find();
    return result
}

async function getSingleCourseFromDB(courseId: string): Promise<void> {

    const convertedId = new mongoose.Types.ObjectId(courseId);

    const result = await CourseModel.aggregate([
        {
            $match: {
                _id: convertedId
            }
        },
        {
            $lookup: {
                from: 'reviews',
                localField: '_id',
                foreignField: 'courseId',
                as: 'reviews'
            }
        }
    ]);

    if (result.length > 0) {
        const foundCourse = result[0];
        return foundCourse;

    } else {
        throw new Error(`Course not found with the id ${courseId}`)
    }

}
export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB
};
