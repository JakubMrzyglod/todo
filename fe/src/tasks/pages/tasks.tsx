import { TasksProvider } from 'tasks/contexts';
import { TasksView } from 'tasks/templates/tasks-view';
import { Task } from 'tasks/types';

export const Tasks = () => {
  const tasks: Task[] = [];
  return (
    <TasksProvider {...{ tasks }}>
      <TasksView />
    </TasksProvider>
  );
};
