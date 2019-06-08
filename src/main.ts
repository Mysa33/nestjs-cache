import * as cors from 'cors';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import "reflect-metadata";
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('NestJS cache')
    .setDescription('Basic chaching module for NestJs')
    .setVersion('1.0')
    .setContactEmail('example@sgcib.com')
    .setTermsOfService('Internal usage')
    .setHost('localhost:3000')
    .build();
  // All api endpoints will be prefixed with "/api/"
  //app.setGlobalPrefix('api');
  // Allow CORS requests
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Cache-Control',
      'Content-Type',
      'If-Modified-Since',
      'Origin',
      'Pragma',
      'X-Data-Count',
      'X-Requested-With'
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));
  app.use(Cache);
  const document = SwaggerModule.createDocument(app, options);
  await SwaggerModule.setup('api', app, document);
  app.use('/static', express.static(__dirname + '/public'));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();