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
  blackListed = ['password'];

  constructor() {}

  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(
      map((data) => {

        console.log(data)
        const now = Date.now();
        const request = context.switchToHttp().getRequest();
        const isError = data instanceof Error && data !== null;
        const success = !isError;

        const message = data && data?.message ? data?.message : 'successful';


        delete data.message;

        const data_ = success && data?.data ? data?.data : data;

        this.logger.log(
          `${request?.method} ${request?.url} ${success ? 'SUCCESS' : 'ERROR'}`,
        );

        const requestLatency = Date.now() - now;

        this.logger.log(`Request completed in ${requestLatency}ms`);

        return {
          success,
          data: this.stripBlackListedProperty(data_),
          message: message,
        };
      }),
    );
  }

  stripBlackListedProperty(data: unknown) {
    if (typeof data !== 'object' || data === null) return data;

    const result = Array.isArray(data) ? [] : {};

    for (const key in data) {
      if (typeof data[key] === 'object' && !(data[key] instanceof Date)) {
        result[key] = this.stripBlackListedProperty(data[key]);
      } else if (!this.blackListed.includes(key)) {
        result[key] = data[key];
      }
    }

    return result;
  }
}
