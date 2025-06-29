import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HttpExceptionFiler implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
