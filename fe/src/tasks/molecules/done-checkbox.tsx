import { Checkbox } from '@components';
import { getApiDetails, useApi } from 'common/api';
import { FC, useState } from 'react';

export const DoneCheckBox: FC<DoneCheckBoxProps> = ({ isDone: checked, id, doTask }) => {
  const [disabled, setDisabled] = useState(checked);
  const useApiProps = {
    onError: () => setDisabled(false),
    onSuccess: () => doTask(),
  };
  const apiDetails = getApiDetails.doneTask(id);
  const [call] = useApi(apiDetails, useApiProps);

  const onChange = () => {
    setDisabled(true);
    call();
  };

  return <Checkbox {...{ disabled, checked, onChange }} />;
};

type DoneCheckBoxProps = {
  isDone: boolean;
  id: number;
  doTask: () => void;
};
