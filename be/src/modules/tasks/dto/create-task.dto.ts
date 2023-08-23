import { ICreateTask } from '../interfaces';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskDto implements ICreateTask {
  @IsString()
  @IsNotEmpty()
  content: string;
}
