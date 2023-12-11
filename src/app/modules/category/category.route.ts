import express from 'express'
import { CAtegoryControllers } from './category.controller';
// import requestValidator from "../../middlewares/requestValidator";
// import { CategoryValidation } from "./category.validation";


const router = express.Router();

router.post(
    '/', CAtegoryControllers.createCategory,
);
router.get(
    '/', CAtegoryControllers.getAllCategory,
);

export const CategoryRoutes = router;