import { Module } from '@nestjs/common';
import { TasksInMemoryRepository, TasksRepository } from './repositories';
import { TasksService } from './services';
import { TasksController } from './controllers';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    { provide: TasksRepository, useClass: TasksInMemoryRepository },
  ],
})
export class TasksModule {}
