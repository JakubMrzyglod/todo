import { TasksRepository } from 'src/modules/tasks/repositories';

export const createTask = (tasksRepository: TasksRepository) => {
  const taskContent = 'Test content';
  return tasksRepository.create({ content: taskContent });
};
