import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { HotelService } from '../src/hotel/hotel-service/hotel.service';
import { Hotel } from '../src/models/hotel.schema';
import { mockList } from './mock-list';

describe('Itinerary planner', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const mockAppModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        HotelService,
        {
          provide: getModelToken(Hotel.name),
          useFactory: () => ({
            find: () => mockList,
          }),
        },
      ],
    }).compile();

    app = mockAppModule.createNestApplication();
    await app.init();
  });

  it('GET list of hotels', async () => {
    const response = await request(app.getHttpServer())
      .get('/hotel?start=2021-11-19&end=2021-11-23')
      .expect(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
