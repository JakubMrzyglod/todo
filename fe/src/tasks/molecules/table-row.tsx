import { FC } from 'react';
import { TableCol, TableRowContainer } from 'tasks/atoms';
import { Task } from 'tasks/types';

import { RemoveButton } from '.';

export const TableRow: FC<Task> = ({ content, done, id }) => (
  <TableRowContainer>
    <TableCol>{done ? 'done' : 'not done'}</TableCol>
    <TableCol>{content}</TableCol>
    <TableCol>
      <RemoveButton {...{ id }} />
    </TableCol>
  </TableRowContainer>
);
