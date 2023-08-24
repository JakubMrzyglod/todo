import { AddTaskContainer } from 'tasks/atoms';
import { AddTaskButton, AddTaskForm, ContentInput } from 'tasks/molecules';

export const AddTask = () => (
  <AddTaskContainer>
    <AddTaskForm>
      <ContentInput />
    </AddTaskForm>
    <AddTaskButton />
  </AddTaskContainer>
);
