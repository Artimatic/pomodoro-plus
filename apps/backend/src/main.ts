/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(
      `Application is running on: http://localhost:${port}/${globalPrefix}`
    );
    Logger.log(
      `Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  } catch (error) {
    Logger.error(`Failed to start application: ${error.message}`, error.stack);
    process.exit(1);
  }
}

bootstrap().catch((err) => {
  process.stderr.write(`Unhandled error during bootstrap: ${err}\n`);
  process.exit(1);
});
