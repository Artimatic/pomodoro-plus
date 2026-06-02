// src/app/app.module.ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller'; // if you have one
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, 'public', 'dashboard'),
        serveRoot: '/dashboard',
      },
      {
        rootPath: join(__dirname, 'public', 'settings'),
        serveRoot: '/settings',
      },
      {
        rootPath: join(__dirname, 'public', 'shell'),
        serveRoot: '/', // Main Shell
        exclude: ['/api/(.*)'],
      },
    ),
    // ... your other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
