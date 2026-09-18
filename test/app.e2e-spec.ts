import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module.js';

describe('GraphQL (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/graphql profile query', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ profile { name } }' })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.profile.name).toBeTruthy();
      });
  });

  afterEach(async () => {
    await app.close();
  });
  
});
