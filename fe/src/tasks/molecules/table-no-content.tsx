import { TableNoContentContainer } from '@tasks/atoms';
import { TableNoContentText } from '@tasks/atoms/table-no-content-text';
import { useTasksContext } from '@tasks/contexts';

export const TableNoContent = () => {
  const { tasks } = useTasksContext();
  if (tasks?.length) {
    return;
  }

  return (
    <TableNoContentContainer>
      <TableNoContentText />
    </TableNoContentContainer>
  );
};
