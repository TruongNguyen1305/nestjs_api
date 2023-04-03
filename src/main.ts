import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('RunMate API - Group 7 -Mobile Application Development')
  .setDescription('API Documentation for CRUD Run of RunMate App ')
  // .setVersion('1.0')
  .addTag('runs')
  .build();
  
  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  
  const document = SwaggerModule.createDocument(app, config, options);
  
  
  
  SwaggerModule.setup('api', app, document);
  
  console.log('alo')
  await app.listen(3000);
}
bootstrap();
