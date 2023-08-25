import { FCC } from '@common-types';
import { Form } from '@components';

export const AddTaskForm: FCC = ({ children }) => {
  return (
    <Form
      {...{
        className: 'flex items-center',
        onSubmit: (data: unknown) => console.log(data),
        children,
      }}
    />
  );
};
