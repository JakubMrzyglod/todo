import { Background, Content } from './atoms';
import { Card } from './atoms/card';
import { AddTaskForm, TasksTable } from './organisms';

export const Tasks = () => (
  <Background>
    <Content>
      <Card>
        <AddTaskForm />
        <TasksTable />
      </Card>
    </Content>
  </Background>
);
