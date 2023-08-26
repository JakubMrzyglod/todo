import { TableHeadCol, TableHeadContainer } from '@tasks/atoms';
import { FC } from 'react';

export const TableHead: FC = () => (
  <TableHeadContainer>
    <TableHeadCol>Done</TableHeadCol>
    <TableHeadCol>Content</TableHeadCol>
    <TableHeadCol>Actions</TableHeadCol>
  </TableHeadContainer>
);
