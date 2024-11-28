import { Router } from "express";
import { Request, Response } from "express";
import { addSchoolController } from "../controllers";
const router = Router();

router.post("/addSchool", (req: Request, res: Response) => {
    addSchoolController(req, res);
});

export default router;
