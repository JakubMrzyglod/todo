import { FCC } from '@common-types';
import { Form } from '@components';
import { getApiDetails, useApi } from 'common/api';
import { useForm } from 'react-hook-form';
import { useTasksContext } from 'tasks/contexts';
import { Task } from 'tasks/types';

export const AddTaskForm: FCC = ({ children }) => {
  const methods = useForm();
  const { addItem } = useTasksContext();
  const useApiProps = {
    onSuccess: (task: Task) => {
      addItem(task);
      methods.reset();
    },
  };
  const apiDetails = getApiDetails.addTask();

  const [onSubmit, disabled] = useApi(apiDetails, useApiProps);

  return (
    <Form
      {...{
        disabled,
        onSubmit,
        children,
        methods,
      }}
    />
  );
};
