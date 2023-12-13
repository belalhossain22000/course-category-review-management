import { NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";


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
        errorResponse.errorMessage = `${err.value} is not a valid ID!`;
    } else if (err instanceof ZodError) {
        errorResponse.message = 'Validation Error';
        errorResponse.errorMessage = err.issues.map((issue: ZodIssue) => {
            return {
                path: issue?.path[issue.path.length - 1],
                message: issue.message,
            };
        })
    } else if (err?.code === 11000) {
        const match = err.message.match(/"([^"]*)"/);
        const extractedMessage = match && match[1];
        errorResponse.message = 'Duplicate Key Error';
        errorResponse.errorMessage = `${extractedMessage} is already exist`
    } else if (err?.name === 'ValidationError') {
        errorResponse.message = err?._message;
    }

    res.status(500).json(errorResponse);

});

export default globalErrorHandler;