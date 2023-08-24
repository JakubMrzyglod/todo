import { FC } from 'react';
import { ActionButton, BinIcon } from 'tasks/atoms';
import { useTasksContext } from 'tasks/contexts';

export const RemoveButton: FC<RemoveButtonProps> = ({ id }) => {
  const { dropItem } = useTasksContext();

  const onClick = () => {
    console.log(`remove item [${id}]`);
    dropItem(id);
  };

  return (
    <ActionButton {...{ onClick }}>
      <BinIcon />
    </ActionButton>
  );
};

type RemoveButtonProps = {
  id: number;
};
