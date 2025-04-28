import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpInterceptor } from './common/interceptor/http-response.interceptor';
import { HttpExceptionFiler } from './common/exception/error.exception-filter';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/webhook', bodyParser.raw({ type: 'application/json' }));

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Mmiri')
    .setVersion('1.0')
    .setDescription('This API is the version 1.0 of mmiri')
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new HttpInterceptor());
  app.useGlobalFilters(new HttpExceptionFiler());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
