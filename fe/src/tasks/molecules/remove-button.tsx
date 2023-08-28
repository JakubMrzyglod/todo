import { ActionButton, BinIcon } from '@tasks/atoms';
import { useTasksContext } from '@tasks/contexts';
import { FC } from 'react';

export const RemoveButton: FC<RemoveButtonProps> = ({ id }) => {
  const { getDropItem } = useTasksContext();
  const [onClick, disabled] = getDropItem(id);

  return (
    <ActionButton {...{ onClick, disabled }}>
      <BinIcon />
    </ActionButton>
  );
};

type RemoveButtonProps = {
  id: number;
};
