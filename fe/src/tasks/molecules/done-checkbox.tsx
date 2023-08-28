import { Checkbox } from '@components';
import { useTasksContext } from '@tasks/contexts';
import { FC } from 'react';

export const DoneCheckBox: FC<DoneCheckBoxProps> = ({ done: checked, id }) => {
  const { getDoneItem } = useTasksContext();
  const [doneItem, disabled] = getDoneItem(id);
  const onChange = doneItem;

  return <Checkbox {...{ disabled, checked, onChange }} />;
};

type DoneCheckBoxProps = {
  done: boolean;
  id: number;
};
