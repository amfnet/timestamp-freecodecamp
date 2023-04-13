import { DateResponse } from "./interfaces";

export function fillDate(stringDate: string): DateResponse | null {
	try {
		let date: Date;
		stringDate.replace("%20", " ");
		if (!stringDate.includes("-") && !stringDate.includes(" ")) {
			date = new Date(Number(stringDate));
		} else {
			date = new Date(stringDate);
		}

		date.toJSON().at(0);
		return { unix: date.getTime(), utc: date.toUTCString() };
	} catch {
		const error = new Error("Incorrect Data");
		error.name = "IDATA";

		throw error;
	}
}
