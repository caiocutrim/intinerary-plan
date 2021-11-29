import { Module } from '@nestjs/common';
import { HotelModule } from '../../hotel/hotel.module';
import { HotelSchedulerService } from './hotel.scheduler.service';

@Module({
  imports: [HotelModule],
  providers: [HotelSchedulerService],
})
export class HotelsModule {}
