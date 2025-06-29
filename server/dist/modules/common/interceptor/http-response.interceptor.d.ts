import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class HttpInterceptor implements NestInterceptor {
    private logger;
    blackListed: string[];
    constructor();
    intercept(context: ExecutionContext, next: CallHandler<any>): import("rxjs").Observable<{
        success: boolean;
        data: unknown;
        message: any;
    }>;
    stripBlackListedProperty(data: unknown): unknown;
}
