import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TasksRepository } from '../repositories';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createTaskDto);
  }

  findAll() {
    return this.tasksRepository.getAll();
  }

  async markAsDone(taskId: number) {
    const updated = await this.tasksRepository.done(taskId);

    if (!updated) {
      throw new NotFoundException(`Not found task with id [${taskId}]`);
    }
  }

  async remove(taskId: number) {
    const deleted = await this.tasksRepository.delete(taskId);

    if (!deleted) {
      throw new NotFoundException(`Not found task with id [${taskId}]`);
    }
  }
}
