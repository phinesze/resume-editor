import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ResumesModule } from './resumes/resumes.module';
import { ComponentsModule } from './components/components.module';
import { ProfilesService } from './profiles/profiles.service';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ResumesModule,
    ComponentsModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProfilesService],
})
export class AppModule {}
