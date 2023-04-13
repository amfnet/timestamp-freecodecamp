import express, { Express, Request, Response, Application } from "express";
import { router } from "./routes/index.routes";

class App {
	server: Express;
	port: number;

	constructor(pPort: number = 3000) {
		this.server = express();
		this.port = pPort;
		this.server.use(router);
	}

	listen(callback: () => void): void {
		this.server.listen(this.port, callback);
	}
}

export { App };
