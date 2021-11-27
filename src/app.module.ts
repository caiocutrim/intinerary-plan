import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './scheduler/hotels/hotels.module';

@Module({
  imports: [ScheduleModule.forRoot(), HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
