import { getApiDetails, useApi } from 'common/api';
import { FC } from 'react';
import { ActionButton, BinIcon } from 'tasks/atoms';
import { useTasksContext } from 'tasks/contexts';

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
