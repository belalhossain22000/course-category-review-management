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
export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB
};
