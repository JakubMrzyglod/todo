import { TasksProvider } from 'tasks/contexts';
import { TasksView } from 'tasks/templates/tasks-view';
import { Task } from 'tasks/types';

export const Tasks = () => {
  const tasks: Task[] = [
    { id: 1, content: 'Awesome Task content', done: false },
    { id: 2, content: 'Other awesome Task content', done: false },
  ];
  return (
    <TasksProvider {...{ tasks }}>
      <TasksView />;
    </TasksProvider>
  );
};
