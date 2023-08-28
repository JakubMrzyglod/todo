import { getApiDetails, useApi } from '@api';
import { ActionButton, BinIcon } from '@tasks/atoms';
import { useTasksContext } from '@tasks/contexts';
import { FC } from 'react';

export const RemoveButton: FC<RemoveButtonProps> = ({ id }) => {
  const { dropTask } = useTasksContext();

  const useApiProps = {
    onSuccess: () => dropTask(id),
  };
  const apiDetails = getApiDetails.dropTask(id);
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
