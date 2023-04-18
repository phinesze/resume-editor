import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ResumesModule } from './resumes/resumes.module';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [ConfigModule.forRoot(), ResumesModule, ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
