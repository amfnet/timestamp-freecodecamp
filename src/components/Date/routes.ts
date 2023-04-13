import { Router } from "express";
import { dateBaseController, getDateByStringController } from "./controller";
import { errorIncorrectDataMid } from "../../middlewares/error.middleware";

export const dateRouter = Router();

dateRouter.get("/date", dateBaseController);
dateRouter.get("/date/:dateString", getDateByStringController);

dateRouter.use(errorIncorrectDataMid);
