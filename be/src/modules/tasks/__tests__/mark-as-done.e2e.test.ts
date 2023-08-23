import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { TasksRepository } from '../repositories';
import { createTask } from '../../../test-commons';

describe('TasksController - (PATCH) /tasks', () => {
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

  it('should mark as done', async () => {
    const { id: taskId } = await createTask(tasksRepository);
    await request(app.getHttpServer())
      .patch(`/tasks/${taskId}`)
      .expect(200)
      .expect({});

    const updatedTask = await tasksRepository['tasks'].find(
      (task) => task.id === taskId,
    );

    expect(updatedTask?.done).toBe(true);
  });

  it('should throw error for invalid taskId', () => {
    return request(app.getHttpServer()).patch(`/tasks/123`).expect(404).expect({
      message: 'Not found task with id [123]',
      error: 'Not Found',
      statusCode: 404,
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
