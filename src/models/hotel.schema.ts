import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Room } from './room.schema';
export type HotelDocument = Hotel & mongoose.Document;

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  start: string;

  @Prop()
  end: string;

  @Prop()
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
