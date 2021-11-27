import { Module } from '@nestjs/common';
import { Hotel } from './hotel';

@Module({
  providers: [Hotel],
})
export class HotelsModule {}
