 import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicsModule } from './basics/basics.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [BasicsModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
