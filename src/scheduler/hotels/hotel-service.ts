import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class HotelSchedulerService {
  constructor(
    private readonly logger: Logger,
    private readonly hotelService: HotelService,
  ) {}

  @Cron('5 * * * * *')
  async getHotels() {
    this.logger.debug('I am ready to get hotels from third part api');
    const result = await this.hotelService.getHotels();
    return result;
  }
}
