import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { TasksRepository } from '../repositories';
import { createTask } from '../../../test-commons';

describe('TasksController - (GET) /tasks', () => {
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
    const task = await createTask(tasksRepository);
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect([task]);
  });

  afterAll(async () => {
    await app.close();
  });
});
