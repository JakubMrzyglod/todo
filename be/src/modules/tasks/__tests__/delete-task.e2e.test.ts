import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { TasksRepository } from '../repositories';
import { createTask } from '../../../test-commons';

describe('TasksController - (DELETE) /tasks/:taskId', () => {
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

  it('should delete task', async () => {
    const createTasksPromises = new Array(3)
      .fill(null)
      .map(() => createTask(tasksRepository));
    const [, { id: taskToDeleteId }] = await Promise.all(createTasksPromises);
    await request(app.getHttpServer())
      .delete(`/tasks/${taskToDeleteId}`)
      .expect(200)
      .expect({});

    const updatedTask = await tasksRepository['tasks'].find(
      (task) => task.id === taskToDeleteId,
    );

    expect(updatedTask).toBeUndefined();
  });

  it('should throw error for invalid taskId', () => {
    return request(app.getHttpServer())
      .delete(`/tasks/123`)
      .expect(404)
      .expect({
        message: 'Not found task with id [123]',
        error: 'Not Found',
        statusCode: 404,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
