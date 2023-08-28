import { Form } from '@components';
import { AddTaskContainer } from '@tasks/atoms';
import { useTasksContext } from '@tasks/contexts';
import { AddTaskButton, ContentInput } from '@tasks/molecules';
import { useForm } from 'react-hook-form';

export const AddTask = () => {
  const methods = useForm();
  const { getAddItem } = useTasksContext();
  const [onSubmit, disabled] = getAddItem(methods.reset);

  return (
    <Form {...{ disabled, onSubmit, methods }}>
      <AddTaskContainer>
        <ContentInput />
        <AddTaskButton />
      </AddTaskContainer>
    </Form>
  );
};
