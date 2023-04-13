import { Request, NextFunction, Response } from "express";

export function errorIncorrectDataMid(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err.name == "IDATA") {
		res.json({ error: "Invalid Date" });
	} else {
		next(err);
	}
}
