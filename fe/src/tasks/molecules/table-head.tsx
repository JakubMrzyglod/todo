import { FC } from 'react';
import { TableHeadCol, TableHeadContainer } from 'tasks/atoms';

export const TableHead: FC = () => (
  <TableHeadContainer>
    <TableHeadCol>Done</TableHeadCol>
    <TableHeadCol>Content</TableHeadCol>
    <TableHeadCol>Actions</TableHeadCol>
  </TableHeadContainer>
);
