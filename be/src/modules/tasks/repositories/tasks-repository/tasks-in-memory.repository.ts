import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { ICreateTask, ITask } from '../../interfaces';

@Injectable()
export class TasksInMemoryRepository implements TasksRepository {
  private tasks: ITask[] = [];
  private nextId = 1;

  create(taskDetails: ICreateTask): Promise<ITask> {
    const id = this.nextId++;
    const newTasks = { ...taskDetails, id, done: false };
    this.tasks.push(newTasks);

    return Promise.resolve(newTasks);
  }

  getAll(): Promise<ITask[]> {
    return Promise.resolve(this.tasks);
  }

  delete(taskId: number): Promise<void> {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);

    return Promise.resolve();
  }

  done(taskId: number): Promise<boolean> {
    let updated = false;
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId) {
        updated = true;
        return { ...task, done: true };
      } else {
        return task;
      }
    });

    return Promise.resolve(updated);
  }
}
