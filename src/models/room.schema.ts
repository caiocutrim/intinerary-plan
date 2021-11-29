import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type RoomDocument = Room & mongoose.Document;

@Schema()
export class Room {
  @Prop()
  type: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
