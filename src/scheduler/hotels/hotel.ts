import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class Hotel {
  private readonly logger = new Logger(Hotel.name);

  @Cron('10 * * * * *')
  getHotels() {
    this.logger.debug('I am ready to get hotels from third part api');
  }
}
