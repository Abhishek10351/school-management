import listSchools from "../controllers/listSchools";
import { Router } from "express";
import { Request, Response } from "express";
const router = Router();

router.get("/listSchools", (req: Request, res: Response) => {
    listSchools(req, res);
});

export default router;
