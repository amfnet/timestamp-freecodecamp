import { DateResponse } from "./interfaces";

export function fillDate(stringDate: string): DateResponse | null {
	try {
		let date: Date;
		if (!stringDate.includes("-")) {
			date = new Date(Number(stringDate));
		} else {
			date = new Date(stringDate);
		}
		return { unix: date.getTime().toString(), utc: date.toUTCString() };
	} catch {
		const error = new Error("Incorrect Data");
		error.name = "IDATA";

		throw error;
	}
}
