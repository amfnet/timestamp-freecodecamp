import { Router } from "express";
import { dateRouter } from "../components/Date/routes";

export const router: Router = Router();

router.use("/api", dateRouter);
