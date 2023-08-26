import { getApiDetails, useApi } from '@api';
import { Form } from '@components';
import { AddTaskContainer } from '@tasks/atoms';
import { useTasksContext } from '@tasks/contexts';
import { AddTaskButton, ContentInput } from '@tasks/molecules';
import { Task } from '@tasks/types';
import { useForm } from 'react-hook-form';

export const AddTask = () => {
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
    <Form {...{ disabled, onSubmit, methods }}>
      <AddTaskContainer>
        <ContentInput />
        <AddTaskButton />
      </AddTaskContainer>
    </Form>
  );
};
