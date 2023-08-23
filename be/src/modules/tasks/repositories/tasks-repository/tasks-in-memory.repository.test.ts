import { TasksInMemoryRepository } from './tasks-in-memory.repository';
import { ICreateTask } from '../../interfaces';

// Create a mock task for testing
const mockTask: ICreateTask = {
  content: 'This is a test task',
};

describe('TasksInMemoryRepository', () => {
  let tasksRepository: TasksInMemoryRepository;

  beforeEach(() => {
    tasksRepository = new TasksInMemoryRepository();
  });

  describe('create', () => {
    it('should add a new task to the tasks list', async () => {
      const createdTask = await tasksRepository.create(mockTask);

      expect(createdTask).toBeDefined();
      expect(createdTask.id).toBe(1);
      expect(createdTask.content).toBe(mockTask.content);
      expect(createdTask.done).toBe(false);
    });
  });

  describe('getAll', () => {
    it('should return all tasks', async () => {
      const tasks = await tasksRepository.getAll();

      expect(tasks).toBeDefined();
      expect(tasks.length).toBe(0);
    });
  });

  describe('delete', () => {
    it('should remove the task with the specified id', async () => {
      await tasksRepository.create(mockTask);
      const createdTask = await tasksRepository.create(mockTask);

      await tasksRepository.delete(createdTask.id);
      const tasks = await tasksRepository.getAll();

      expect(tasks.length).toBe(1);
      expect(tasks.find((task) => task.id === createdTask.id)).toBeUndefined();
    });
  });

  describe('done', () => {
    it('should mark the task with the specified id as done', async () => {
      const createdTask = await tasksRepository.create(mockTask);
      await tasksRepository.done(createdTask.id);

      const tasks = await tasksRepository.getAll();

      expect(tasks.find((task) => task.id === createdTask.id)?.done).toBe(true);
    });
  });
});
