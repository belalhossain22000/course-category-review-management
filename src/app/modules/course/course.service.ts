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
const getSingleCourseFromDB = async (courseId: string) => {
    const result = await CourseModel.findOne({ _id: courseId }).populate('Review');
    return result
}


// const updatedCourseIntoDB = async (courseId, updateData) => {

//     const course = await CourseModel.findById(courseId);
//     if (!course) {
//         throw new Error('Course not found');
//     }

//     // Update the course dynamically with the received data
//     Object.keys(updateData).forEach((key) => {
//         // Handle updates for non-primitive fields (e.g., objects or arrays)
//         if (typeof updateData[key] === 'object' && !Array.isArray(updateData[key])) {
//             // Update non-primitive fields dynamically
//             Object.assign(course[key], updateData[key]);
//         } else {
//             // Update primitive fields
//             course[key] = updateData[key];
//         }
//     });

//     // Save the updated course
//     await course.save();
//     const result = await CourseModel.findByIdAndUpdate(courseId, updateData, { new: true });
//     return result
// }
export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    // updatedCourseIntoDB,
    getSingleCourseFromDB
};
