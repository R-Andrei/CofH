import http, { Server } from 'http';
import App from './app';


const port: Number = 6969;
const server: Server = http.createServer(App);

server.listen(port);
server.on('listening', (): void => {
    console.info(`> Listening on port ${port}`);
});