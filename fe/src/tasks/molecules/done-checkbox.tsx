import { Checkbox } from '@components';
import { getApiDetails, useApi } from 'common/api';
import { FC, useState } from 'react';

export const DoneCheckBox: FC<DoneCheckBoxProps> = ({ done, id }) => {
  const [disabled, setDisabled] = useState(done);
  const [checked, setChecked] = useState(done);
  const useApiProps = {
    onError: () => setDisabled(false),
    onSuccess: () => setChecked(true),
  };
  const apiDetails = getApiDetails.doneTask(id);
  const [call] = useApi(apiDetails, useApiProps);

  const onClick = () => {
    setDisabled(true);
    call();
  };
  const onChange = () => {};

  return <Checkbox {...{ disabled, onClick, checked, onChange }} />;
};

type DoneCheckBoxProps = {
  done: boolean;
  id: number;
};
