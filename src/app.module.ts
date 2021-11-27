import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './scheduler/hotels/hotels.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), HotelsModule, HotelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
