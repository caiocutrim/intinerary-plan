import { HotelDocument } from 'src/models/hotel.schema';

export interface IHotelService {
  getHotels(start?: string, end?: string): Promise<HotelDocument[]>;
  storeHotelsFromAPI(): Promise<number>;
}
