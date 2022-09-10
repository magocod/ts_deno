import express from "npm:express@4.18.1";

const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World')
})

const server = app.listen(port)

server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log(`Server is running ${bind}`);
}
