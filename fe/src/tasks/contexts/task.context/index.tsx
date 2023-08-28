import { getApiDetails, useApi } from '@api';
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

  const getDropItem = (id: number) => {
    const removeItemFromList = () =>
      setTasks((tasks) => tasks?.filter((tasks) => tasks.id !== id));
    const useApiProps = {
      onSuccess: removeItemFromList,
    };
    const apiDetails = getApiDetails.deleteTask(id);
    const apiCall = useApi(apiDetails, useApiProps);
    return apiCall;
  };

  const getDoneItem = (id: number) => {
    const updateTaskExecution = () => {
      setTasks(
        (tasks) =>
          tasks?.map((task) => (task.id !== id ? task : { ...task, done: true })),
      );
    };
    const useApiProps = {
      onSuccess: updateTaskExecution,
    };
    const apiDetails = getApiDetails.doneTask(id);
    const apiCall = useApi(apiDetails, useApiProps);
    return apiCall;
  };

  const getAddItem = (resetForm: () => void) => {
    const addItem = (task: Task) => setTasks((tasks) => [...(tasks ?? []), task]);

    const useApiProps = {
      onSuccess: (task: Task) => {
        addItem(task);
        resetForm();
      },
    };
    const apiDetails = getApiDetails.addTask();

    const apiCall = useApi(apiDetails, useApiProps);
    return apiCall;
  };

  const value = { tasks, getDropItem, getDoneItem, getAddItem };

  return <Provider {...{ value }}>{children}</Provider>;
};

export const useTasksContext = () => useContext(TasksContext);

type TasksProviderProps = {
  tasks?: Task[];
};

type TasksContextType = {
  tasks: Task[] | undefined;
  getDropItem: (id: number) => [call: () => void, disabled: boolean];
  getDoneItem: (id: number) => [call: () => void, disabled: boolean];
  getAddItem: (resetForm: () => void) => [call: () => void, disabled: boolean];
};
