import { Module } from '@nestjs/common';
import { HotelService } from './hotel-service/hotel.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from '../models/hotel.schema';
import { HotelController } from '../hotel/hotel-controller/hotel.controller';
import { HOTEL_SERVICE } from '../constants';
const providers = [
  {
    provide: HOTEL_SERVICE,
    useClass: HotelService,
  },
];
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hotel.name,
        schema: HotelSchema,
      },
    ]),
  ],
  providers: providers,
  exports: [...providers],
  controllers: [HotelController],
})
export class HotelModule {}
