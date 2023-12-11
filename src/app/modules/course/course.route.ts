import express from 'express'
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
    '/', CourseControllers.createCourse,
);
router.get(
    '/', CourseControllers.getAllCourse,
);
router.put(
    '/:courseId', CourseControllers.updatedCourse,
);

export const CourseRoutes = router;