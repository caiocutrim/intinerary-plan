import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { HotelsModule } from './scheduler/hotel/hotel-scheduler.module';
import { HotelModule } from './hotel/hotel.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HotelsModule,
    HotelModule,
  ],
})
export class AppModule {}
