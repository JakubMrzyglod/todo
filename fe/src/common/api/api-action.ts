export enum ApiAction {
  DELETE_TASK,
}

enum HttpMethod {
  DELETE = 'delete',
}

export const ApiActionDetails: Record<
  ApiAction,
  [path: ((...args: (number | string)[]) => string) | string, method: HttpMethod]
> = {
  [ApiAction.DELETE_TASK]: [(tasksId) => `/tasks/${tasksId}`, HttpMethod.DELETE],
};
