import { Injectable, Logger } from '@nestjs/common';
import { addDays } from 'date-fns';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel, HotelDocument } from '../../models/hotel.schema';
import { IHotelService } from './ihotel.service';
import axios from 'axios';

@Injectable()
export class HotelService implements IHotelService {
  private logger: Logger = new Logger(HotelService.name);
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async storeHotelsFromAPI() {
    const configService = new ConfigService();
    const XAPIKEY = configService.get('XAPIKEY');
    const APIURL = configService.get('APIURL');
    const options = {
      headers: {
        'x-api-key': XAPIKEY,
        'Content-type': 'application/json',
      },
    };
    const response = await axios.get(APIURL + '/hotels', options);
    const parsedData = this.parseData(response.data.data);
    this.logger.debug(parsedData, 'parsedData from api');
    const result = await this.hotelModel.collection.insertMany(parsedData);
    return result.insertedCount;
  }

  async getHotels(start, end) {
    if (start && end) {
      return this.hotelModel.find({ start, end });
    }

    return this.hotelModel.find();
  }

  private parseData(data: any) {
    return data.map((e) => ({
      name: e.name,
      start: new Date().toISOString(),
      end: addDays(new Date(), 15).toISOString(),
      rooms: e.roomTypes.map((e) => ({
        name: e.name,
      })),
    }));
  }
}
