import { FC } from 'react';
import { TableCol, TableRowContainer } from 'tasks/atoms';
import { Task } from 'tasks/types';

import { RemoveButton } from '.';

export const TableRow: FC<Task> = ({ content, done }) => (
  <TableRowContainer>
    <TableCol>{done ? 'done' : 'not done'}</TableCol>
    <TableCol>{content}</TableCol>
    <TableCol>
      <RemoveButton />
    </TableCol>
  </TableRowContainer>
);
