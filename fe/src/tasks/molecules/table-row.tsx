import { TableCol, TableRowContainer } from '@tasks/atoms';
import { Task } from '@tasks/types';
import { FC, useState } from 'react';

import { RemoveButton } from '.';
import { DoneCheckBox } from './done-checkbox';

export const TableRow: FC<Task> = ({ content, done, id }) => {
  return (
    <TableRowContainer>
      <TableCol>
        <DoneCheckBox {...{ id, done }} />
      </TableCol>
      <TableCol {...{ done }}>{content}</TableCol>
      <TableCol>
        <RemoveButton {...{ id }} />
      </TableCol>
    </TableRowContainer>
  );
};
