import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { ICreateTask, ITask } from '../../interfaces';

@Injectable()
export class TasksInMemoryRepository implements TasksRepository {
  private tasks: ITask[] = [];

  create(taskDetails: ICreateTask): Promise<ITask> {
    const id = this.tasks.length + 1;
    const newTasks = { ...taskDetails, id, done: false };
    this.tasks.push(newTasks);
    return Promise.resolve(newTasks);
  }
  getAll(): Promise<ITask[]> {
    throw new Error('Method not implemented.');
  }
  delete(taskId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  done(taskId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
