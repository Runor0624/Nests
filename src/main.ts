import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const prisma: PrismaService = app.get(PrismaService);
  prisma.enableShutdownHooks(app);
  await app.listen(3000);
  // 배포 : 3000
  // 개발 : 8095
}
bootstrap();
