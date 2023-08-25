import { AddTaskContainer } from 'tasks/atoms';
import { AddTaskButton, AddTaskForm, ContentInput } from 'tasks/molecules';

export const AddTask = () => (
  <AddTaskForm>
    <AddTaskContainer>
      <ContentInput />
      <AddTaskButton />
    </AddTaskContainer>
  </AddTaskForm>
);
