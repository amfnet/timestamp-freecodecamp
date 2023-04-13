import { Request, Response, NextFunction } from "express";
import { fillDate } from "./utils";

export function dateBaseController(req: Request, res: Response) {
	res.json(fillDate(Date.now().toString()));
}

export function getDateByStringController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { dateString } = req.params;
		res.json(fillDate(dateString));
	} catch (error) {
		next(error);
	}
}
