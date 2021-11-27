import { Module } from '@nestjs/common';
import { HotelServiceService } from './hotel-service/hotel-service.service';

@Module({
  providers: [HotelServiceService],
})
export class HotelModule {}
