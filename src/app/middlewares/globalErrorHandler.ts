import { Request, Response, NextFunction } from 'express';

const globalErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    next: NextFunction
) => {

    res.status(500).json({
        success: false,
        message: 'Internal Server Error Global error',
        errorMessage: err.message,
        errorDetails: err,
        stack: err.stack
    });
};

export default globalErrorHandler;
