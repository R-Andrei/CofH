import express, { Application, Request, Response } from 'express';
import mongoose, { Error } from 'mongoose';
import cors from 'cors';

import RequestLog from './middleware/request.log';
import AuthRouter from './routes/auth';
import "./env";

// initialize instances
const app: Application = express();
const mongo = mongoose;

// start main components
mongo.connect(
    `mongodb+srv://${process.env.user}:${process.env.pass}@${process.env.cluster}-pdqfb.mongodb.net/${process.env.database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error: Error): void => {
        if (error) console.error(error.message);
        else console.log('> Connected to database\n');
    }
);

// Base middleWare
app.use(express.json());
app.use(cors());

// Custom middleware
app.use(RequestLog);

// Route Middleware
app.use('/api/user', AuthRouter);

app.get('/', (_request: Request, response: Response): void => {
    response.send('Hello');
});

export default app;

