import { Form } from '@components';
import { ContentInput } from 'tasks/molecules';
import { AddTaskButton } from 'tasks/molecules/add-task-button';

export const AddTaskForm = () => (
  <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
    <div className="w-full">
      <Form
        {...{
          className: 'flex items-center',
          onSubmit: (data: unknown) => console.log(data),
        }}
      >
        <ContentInput />
      </Form>
    </div>
    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
      <AddTaskButton />
    </div>
  </div>
);
