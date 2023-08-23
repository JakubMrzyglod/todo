import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';

describe('TasksController - (POST) /tasks', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create tasks and return new one', async () => {
    const { body } = await request(app.getHttpServer())
      .post('/tasks')
      .send({ content: 'foo' })
      .expect(201);

    expect(body).toEqual({
      content: 'foo',
      id: expect.any(Number),
      done: false,
    });
  });

  it('should throw error for empty body', () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .expect(400)
      .expect({
        message: ['content should not be empty', 'content must be a string'],
        error: 'Bad Request',
        statusCode: 400,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
