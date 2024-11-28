import listSchools from "../controllers/listSchools";
import { Router } from "express";
const router = Router();

router.get("/listSchools", listSchools);

export default router;
