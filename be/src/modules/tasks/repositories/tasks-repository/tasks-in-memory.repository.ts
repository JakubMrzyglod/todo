import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { ICreateTask, ITask } from '../../interfaces';

@Injectable()
export class TasksInMemoryRepository implements TasksRepository {
  create(taskDetails: ICreateTask): Promise<ITask> {
    throw new Error('Method not implemented.');
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
