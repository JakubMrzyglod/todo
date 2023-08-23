import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { APP_PIPE } from '@nestjs/core';
import { RequestValidationPipe } from './commons/pipes/request-validation.pipe';

@Module({
  imports: [TasksModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: RequestValidationPipe,
    },
  ],
})
export class AppModule {}
