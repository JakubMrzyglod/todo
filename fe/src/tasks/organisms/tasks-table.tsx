import { FC } from 'react';
import { TableContainer } from 'tasks/atoms';
import { TableBody, TableHead } from 'tasks/molecules';

export const TasksTable: FC = () => (
  <TableContainer>
    <TableHead />
    <TableBody />
  </TableContainer>
);
