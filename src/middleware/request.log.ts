import { Request, Response, NextFunction } from 'express';

const requestLoggerMiddleWare = ((request: Request, response: Response, next: NextFunction): void => {
    console.info(`${request.method} '${request.originalUrl}'`);

    const start = new Date().getTime();
    response.on('finish', (): void => {
        const elapsed = new Date().getTime() - start;
        console.info(`${request.method} '${request.originalUrl}' HTTP_${response.statusCode} (${elapsed}ms)\n`)
    })
    next();
});

export default requestLoggerMiddleWare;