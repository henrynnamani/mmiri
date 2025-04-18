import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  private logger = new Logger(HttpInterceptor.name);
  constructor() {}

  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(
      map((data) => {
        // 👇 This formats the response correctly
        const now = Date.now();
        const request = context.switchToHttp().getRequest();
        const isError = data instanceof Error && data !== null;
        const success = !isError;

        const message = data && data?.message ? data?.mesage : 'successful';

        const data_ = success && data?.data ? data?.data : data;

        this.logger.log(
          `${request?.method} ${request?.url} ${success ? 'SUCCESS' : 'ERROR'}`,
        );

        const requestLatency = Date.now() - now;

        this.logger.log(`Request completed in ${requestLatency}ms`);

        return {
          success,
          data: data_,
          message,
        };
      }),
    );
  }
}
