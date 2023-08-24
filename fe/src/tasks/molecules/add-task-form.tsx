import { FCC } from '@common-types';
import { Form } from '@components';
import { AddTaskFormContainer } from 'tasks/atoms/add-task-form-container';

export const AddTaskForm: FCC = ({ children }) => (
  <AddTaskFormContainer>
    <Form
      {...{
        className: 'flex items-center',
        onSubmit: (data: unknown) => console.log(data),
        children,
      }}
    />
  </AddTaskFormContainer>
);
