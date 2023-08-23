import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from '../repositories';

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: TasksRepository,
          useValue: {
            create: jest.fn(),
            getAll: jest.fn(),
            done: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    tasksService = moduleRef.get<TasksService>(TasksService);
    tasksRepository = moduleRef.get<TasksRepository>(TasksRepository);
  });

  describe('create', () => {
    it('should call the create method of tasks repository with the provided task object', () => {
      const createTaskDto = {
        content: 'Test Description',
      };

      tasksService.create(createTaskDto);

      expect(tasksRepository.create).toHaveBeenCalledWith(createTaskDto);
    });
  });

  describe('findAll', () => {
    it('should return the result of getAll method of tasks repository', () => {
      const tasks = [{ id: 1, content: 'Test Description' }];

      (tasksRepository.getAll as jest.Mock).mockReturnValue(tasks);

      const result = tasksService.findAll();

      expect(result).toEqual(tasks);
    });
  });

  describe('markAsDone', () => {
    it('should call the done method of tasks repository with the provided taskId', () => {
      const taskId = 1;

      tasksService.markAsDone(taskId);

      expect(tasksRepository.done).toHaveBeenCalledWith(taskId);
    });
  });

  describe('remove', () => {
    it('should call the delete method of tasks repository with the provided taskId', () => {
      const taskId = 1;

      tasksService.remove(taskId);

      expect(tasksRepository.delete).toHaveBeenCalledWith(taskId);
    });
  });
});
