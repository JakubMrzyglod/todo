import { getApiDetails, useApi } from '@api';
import { Checkbox } from '@components';
import { useTasksContext } from '@tasks/contexts';
import { FC } from 'react';

export const DoneCheckBox: FC<DoneCheckBoxProps> = ({ done: checked, id }) => {
  const { doneTask } = useTasksContext();

  const useApiProps = {
    onSuccess: () => doneTask(id),
  };
  const apiDetails = getApiDetails.doneTask(id);
  const [executeTask, disabled] = useApi(apiDetails, useApiProps);
  const onChange = () => executeTask();

  return <Checkbox {...{ disabled, checked, onChange }} />;
};

type DoneCheckBoxProps = {
  done: boolean;
  id: number;
};
