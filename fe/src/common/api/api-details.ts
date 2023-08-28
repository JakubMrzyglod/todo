import { ApiDetails, HttpMethod } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getApiDetails: Record<string, (...args: any[]) => ApiDetails> = {
  dropTask: (taskId: number) => [`/tasks/${taskId}`, HttpMethod.DELETE],
  doneTask: (taskId: number) => [`/tasks/${taskId}`, HttpMethod.PATCH],
  addTask: () => [`/tasks`, HttpMethod.POST],
};
