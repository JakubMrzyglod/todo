import { useTasksContext } from '@tasks/contexts';
import { FC } from 'react';

import { TableRow } from '.';

export const TableBody: FC = () => {
  const { tasks } = useTasksContext();

  return <tbody>{tasks?.map((task, key) => <TableRow {...{ ...task, key }} />)}</tbody>;
};
