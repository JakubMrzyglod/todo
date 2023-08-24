import { Background, Card, Content } from '../atoms';
import { AddTask, TasksTable } from '../organisms';

export const TasksView = () => (
  <Background>
    <Content>
      <Card>
        <AddTask />
        <TasksTable />
      </Card>
    </Content>
  </Background>
);
