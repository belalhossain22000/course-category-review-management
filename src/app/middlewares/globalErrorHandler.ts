import { NextFunction, Request, Response } from "express";


// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler = ((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Default error response object
    const errorResponse = {
        success: false,
        message: 'Internal Server Error',
        errorMessage: err.message,
        errorDetails: err,
        stack: err.stack,
    };
    if (err.name === 'CastError') {
        errorResponse.message = 'Invalid ID';
        errorResponse.errorMessage = `${err.value as string} is not a valid ID!`;
    }

    res.status(500).json(errorResponse);

});

export default globalErrorHandler;