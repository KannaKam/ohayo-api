import express from 'express';

export class Server {
    public app: express.Application;
    public port: string|number = process.env.PORT! || 3300;
    constructor() {
        this.app = express();
    }

    start(datos: () => void) {
        this.app.listen(this.port, datos);
    }
}