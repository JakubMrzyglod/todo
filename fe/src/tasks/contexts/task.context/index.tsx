import { FCC } from '@common-types';
import { Task } from '@tasks/types';
import { createContext, useContext, useState } from 'react';

export const TasksContext = createContext<TasksContextType>({} as TasksContextType);

const { Provider } = TasksContext;

export const TasksProvider: FCC<TasksProviderProps> = ({
  children,
  tasks: defaultTasks,
}) => {
  const [tasks, setTasks] = useState(defaultTasks);

  const dropTask = (id: number) =>
    setTasks((tasks) => tasks?.filter((tasks) => tasks.id !== id));

  const doneTask = (id: number) => {
    setTasks(
      (tasks) => tasks?.map((task) => (task.id !== id ? task : { ...task, done: true })),
    );
  };

  const addTask = (task: Task) => setTasks((tasks) => [...(tasks ?? []), task]);

  const value = { tasks, addTask, dropTask, doneTask };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useTasksContext = () => useContext(TasksContext);

type TasksProviderProps = {
  tasks?: Task[];
};

type TasksContextType = {
  tasks: Task[] | undefined;
  addTask: (task: Task) => void;
  dropTask: (id: number) => void;
  doneTask: (id: number) => void;
};
