import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpInterceptor } from './common/interceptor/http-response.interceptor';
import { HttpExceptionFiler } from './common/exception/error.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new HttpInterceptor());
  app.useGlobalFilters(new HttpExceptionFiler());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
