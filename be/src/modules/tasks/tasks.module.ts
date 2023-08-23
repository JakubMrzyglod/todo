import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './repositories';

@Module({
  controllers: [TasksController],
  providers: [TasksService, { provide: TasksRepository, useClass: null }],
})
export class TasksModule {}
