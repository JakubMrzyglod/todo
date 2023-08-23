import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksInMemoryRepository, TasksRepository } from './repositories';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    { provide: TasksRepository, useClass: TasksInMemoryRepository },
  ],
})
export class TasksModule {}
