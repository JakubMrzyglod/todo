import { NotFoundException } from '@nestjs/common';
import { TasksRepository } from '../repositories';
import { TasksService } from './tasks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: TasksRepository;
  let moduleRef: TestingModule;

  beforeEach(async () => {
    moduleRef = await Test.createTestingModule({
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
    it('should call tasksRepository.create with the provided dto', () => {
      const createTaskDto = { content: 'Task description' };

      tasksRepository.create = jest
        .fn()
        .mockReturnValue({ id: 1, ...createTaskDto });

      const result = tasksService.create(createTaskDto);

      expect(result).toEqual({ id: 1, ...createTaskDto });
      expect(tasksRepository.create).toBeCalledWith(createTaskDto);
    });
  });

  describe('findAll', () => {
    it('should call tasksRepository.getAll', () => {
      tasksRepository.getAll = jest.fn().mockReturnValue([
        { id: 1, content: 'Task 1' },
        { id: 2, content: 'Task 2' },
      ]);

      const result = tasksService.findAll();

      expect(result).toEqual([
        { id: 1, content: 'Task 1' },
        { id: 2, content: 'Task 2' },
      ]);
      expect(tasksRepository.getAll).toBeCalled();
    });
  });

  describe('markAsDone', () => {
    it('should call tasksRepository.done with the provided taskId', async () => {
      const taskId = 1;

      tasksRepository.done = jest.fn().mockReturnValue(true);

      await tasksService.markAsDone(taskId);

      expect(tasksRepository.done).toBeCalledWith(taskId);
    });

    it('should throw NotFoundException if tasksRepository.done returns false', async () => {
      const taskId = 1;

      tasksRepository.done = jest.fn().mockReturnValue(false);

      await expect(tasksService.markAsDone(taskId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should call tasksRepository.delete with the provided taskId', async () => {
      const taskId = 1;

      tasksRepository.delete = jest.fn().mockReturnValue(true);

      await tasksService.remove(taskId);

      expect(tasksRepository.delete).toBeCalledWith(taskId);
    });

    it('should throw NotFoundException if tasksRepository.delete returns false', async () => {
      const taskId = 1;

      tasksRepository.delete = jest.fn().mockReturnValue(false);

      await expect(tasksService.remove(taskId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  afterAll(async () => {
    await moduleRef.close();
  });
});
