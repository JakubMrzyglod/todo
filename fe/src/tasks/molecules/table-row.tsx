import { TableCol, TableRowContainer } from '@tasks/atoms';
import { Task } from '@tasks/types';
import { FC, useState } from 'react';

import { RemoveButton } from '.';
import { DoneCheckBox } from './done-checkbox';

export const TableRow: FC<Task> = ({ content, done, id }) => {
  const [isDone, setIsDone] = useState(done);
  const doTask = () => setIsDone(true);
  return (
    <TableRowContainer>
      <TableCol>
        <DoneCheckBox {...{ isDone, id, doTask }} />
      </TableCol>
      <TableCol {...{ isDone }}>{content}</TableCol>
      <TableCol>
        <RemoveButton {...{ id }} />
      </TableCol>
    </TableRowContainer>
  );
};
