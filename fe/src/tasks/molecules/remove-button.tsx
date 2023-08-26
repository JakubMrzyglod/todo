import { getApiDetails, useApi } from '@api';
import { ActionButton, BinIcon } from '@tasks/atoms';
import { useTasksContext } from '@tasks/contexts';
import { FC } from 'react';

export const RemoveButton: FC<RemoveButtonProps> = ({ id }) => {
  const { dropItem } = useTasksContext();
  const useApiProps = {
    onSuccess: () => dropItem(id),
  };
  const apiDetails = getApiDetails.deleteTask(id);
  const [onClick, disabled] = useApi(apiDetails, useApiProps);

  return (
    <ActionButton {...{ onClick, disabled }}>
      <BinIcon />
    </ActionButton>
  );
};

type RemoveButtonProps = {
  id: number;
};
