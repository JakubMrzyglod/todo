import { FC } from 'react';
import { useTasksContext } from 'tasks/contexts';

import { TableRow } from '.';

export const TableBody: FC = () => {
  const { tasks } = useTasksContext();

  return <tbody>{tasks?.map((task, key) => <TableRow {...{ ...task, key }} />)}</tbody>;
};
