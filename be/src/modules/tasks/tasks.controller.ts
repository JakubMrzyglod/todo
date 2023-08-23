import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Patch(':taskId')
  update(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.tasksService.markAsDone(taskId);
  }

  @Delete(':taskId')
  remove(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.tasksService.remove(taskId);
  }
}
