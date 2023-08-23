import { Injectable } from '@nestjs/common';
import { ICreateTask, ITask } from '../../interfaces';

@Injectable()
export abstract class TasksRepository {
  abstract create(taskDetails: ICreateTask): Promise<ITask>;
  abstract getAll(): Promise<ITask[]>;
  abstract delete(taskId: number): Promise<void>;
  abstract done(taskId: number): Promise<boolean>;
}
