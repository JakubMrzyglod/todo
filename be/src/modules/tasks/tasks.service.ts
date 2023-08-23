import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './repositories';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createTaskDto);
  }

  findAll() {
    return this.tasksRepository.getAll();
  }

  markAsDone(taskId: number) {
    return this.tasksRepository.done(taskId);
  }

  remove(taskId: number) {
    return this.tasksRepository.delete(taskId);
  }
}
