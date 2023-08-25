import { FCC } from '@common-types';

export const TableCol: FCC<TableColProps> = ({ children, isDone }) => (
  <th
    {...{
      children,
      scope: 'row',
      className: `
      px-4
      py-3
      font-medium
      text-gray-900
      whitespace-nowrap
      dark:text-white
      ${isDone ? 'line-through' : ''}`,
    }}
  />
);

type TableColProps = {
  isDone?: boolean;
};
