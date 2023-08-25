import { FC } from 'react';
import { TableCol, TableRowContainer } from 'tasks/atoms';
import { Task } from 'tasks/types';

import { RemoveButton } from '.';
import { DoneCheckBox } from './done-checkbox';

export const TableRow: FC<Task> = ({ content, done, id }) => (
  <TableRowContainer>
    <TableCol>
      <DoneCheckBox {...{ done, id }} />
    </TableCol>
    <TableCol>{content}</TableCol>
    <TableCol>
      <RemoveButton {...{ id }} />
    </TableCol>
  </TableRowContainer>
);
