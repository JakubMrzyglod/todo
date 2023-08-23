import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { TasksRepository } from '../repositories';

describe('TasksController - (POST) /tasks', () => {
  let app: INestApplication;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    tasksRepository = app.get(TasksRepository);
    await app.init();
  });

  it('should return empty array for not items', () => {
    return request(app.getHttpServer()).get('/tasks').expect(200).expect([]);
  });

  it('should return empty array for not items', async () => {
    const taskContent = 'Test content';
    await tasksRepository.create({ content: taskContent });
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect([{ id: 1, content: taskContent, done: false }]);
  });

  afterAll(async () => {
    await app.close();
  });
});
