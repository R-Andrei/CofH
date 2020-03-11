import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import RequestLog from './middleware/request.log';
import AuthRouter from './routes/auth';
import "./env";

// initialize instances
const app: Application = express();
const mongo = mongoose;

// start main components
app.listen(5000, (): void => console.log('> Aplication started'));
mongo.connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@companyofheroes-pdqfb.mongodb.net/CofH?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (): void => console.log('> Connected to database\n')
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

