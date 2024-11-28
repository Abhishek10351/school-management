import { Router } from "express";
import { addSchoolController } from "../controllers";
const router = Router();

router.post("/addSchool", addSchoolController);

export default router;
