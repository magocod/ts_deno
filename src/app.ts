// @deno-types="npm:@types/express@4.18.2"
import express, { Response } from 'npm:express@4.18.2';

import { Schema } from "npm:mongoose@6.7";

import { foo } from './utils.ts'

const app = express();
const port = 3000;

const dinosaurSchema = new Schema({
	name: { type: String, unique: true },
	description: String,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

app.get('/', function (_req, res: Response) {
	res.send('Hello World ' + foo());
});

const server = app.listen(port);

server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	console.log(dinosaurSchema)
	const addr = server.address();
	const _bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	console.log(`Server is running http://localhost:${port}`);
}
