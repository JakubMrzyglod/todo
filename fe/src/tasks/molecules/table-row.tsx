import { FC } from 'react';
import { TableCol, TableRowContainer } from 'tasks/atoms';

import { RemoveButton } from '.';

export const TableRow: FC = () => (
  <TableRowContainer>
    <TableCol>PC</TableCol>
    <TableCol>Apple iMac 27&#34;</TableCol>
    <TableCol>
      <RemoveButton />
    </TableCol>
  </TableRowContainer>
);
