import { FCC } from '@common-types';
import { createContext, useContext, useState } from 'react';
import { Task } from 'tasks/types';

export const TasksContext = createContext<TasksContextType>({} as TasksContextType);

const { Provider } = TasksContext;

export const TasksProvider: FCC<TasksProviderProps> = ({
  children,
  tasks: defaultTasks,
}) => {
  const [tasks, setTasks] = useState(defaultTasks);

  const dropItem = (id: number) => {
    setTasks((tasks) => tasks?.filter((tasks) => tasks.id !== id));
  };

  const value = { tasks, dropItem };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useTasksContext = () => useContext(TasksContext);

type TasksProviderProps = {
  tasks?: Task[];
};

type TasksContextType = {
  tasks: Task[] | undefined;
  dropItem: (id: number) => void;
};
