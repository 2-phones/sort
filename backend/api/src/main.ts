import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import Helmet from 'helmet';
import { winstonLogger } from './config/logger.config';
import { AppModule } from './modules/app.module';
import { LoggerService } from './services/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  app.use(Helmet());

  // 배포환경에 따라 cors 설정
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [process.env.CLIENT_URL, process.env.IP_URL]
        : true,
    methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT || 3006);
}
bootstrap();
