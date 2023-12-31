import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT') || 3100;
  await app.listen(port, () =>
    console.log('\x1b[33m%s\x1b[0m', `Server started on port ${port}`),
  );
}
bootstrap();
