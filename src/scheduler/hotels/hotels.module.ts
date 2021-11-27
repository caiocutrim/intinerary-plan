import { Module } from '@nestjs/common';
import { HotelSchedulerService } from './hotel-service';

@Module({
  providers: [HotelSchedulerService],
})
export class HotelsModule {}
