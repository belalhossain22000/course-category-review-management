import express from 'express'
import { CourseControllers } from './course.controller';
import { validateData } from '../../middlewares/validateData';
import { CourseValidation } from './course.validation';

const router = express.Router();

router.post(
    '/', CourseControllers.createCourse,
);
router.get(
    '/', validateData(CourseValidation.CreateCourseValidationSchema), CourseControllers.getAllCourse,
);
router.get(
    '/:courseId/reviews', CourseControllers.getSingleCourse,
);
router.get(
    '/best', CourseControllers.getBestCourse,
);
router.put(
    '/:courseId', CourseControllers.updateCourse,
);


export const CourseRoutes = router;