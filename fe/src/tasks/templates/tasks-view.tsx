import { Background, Card, Content } from '../atoms';
import { AddTaskForm, TasksTable } from '../organisms';

export const TasksView = () => (
  <Background>
    <Content>
      <Card>
        <AddTaskForm />
        <TasksTable />
      </Card>
    </Content>
  </Background>
);
