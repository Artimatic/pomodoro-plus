// src/app/app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join, resolve } from 'path';
import { AppController } from './app.controller'; // if you have one
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'dist', 'apps', 'frontend', 'src', 'apps', 'shell'),
      // For SPA routing: fallback to index.html for non-API routes
      serveRoot: '/',
      exclude: ['/api/(.*)'], // Don't serve static files for API routes
    }),
    // ... your other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}