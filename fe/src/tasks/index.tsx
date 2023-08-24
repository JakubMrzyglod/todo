import { Background, Content } from './atoms';
import { Card } from './atoms/card';
import { AddTask, TasksTable } from './organisms';

export const Tasks = () => (
  <Background>
    <Content>
      <Card>
        <AddTask />
        <TasksTable />
      </Card>
    </Content>
  </Background>
);
