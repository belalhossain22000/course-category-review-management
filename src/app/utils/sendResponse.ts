import { Response } from 'express';

type TResponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string;
    data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.statusCode).json({
        success: data.success,
        statusCode: 201,
        message: data.message,
        data: data.data,
    });
};

export default sendResponse;
