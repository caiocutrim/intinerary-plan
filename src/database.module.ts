import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/intinerary?retryWrites=false',
    ),
  ],
})
export class DatabaseModule {}
