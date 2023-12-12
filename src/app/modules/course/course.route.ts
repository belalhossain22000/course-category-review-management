import express from 'express'
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
    '/', CourseControllers.createCourse,
);
router.get(
    '/', CourseControllers.getAllCourse,
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