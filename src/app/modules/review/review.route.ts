import express from 'express'
import { CourseReviewControllers } from './review.controller';


const router = express.Router();

router.post(
    '/', CourseReviewControllers.createCourseReview,
);


export const CourseReviewRoutes = router;