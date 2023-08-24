import { FCC } from '@common-types';

export const TableHeadContainer: FCC = ({ children }) => (
  <thead
    {...{
      className:
        'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400',
    }}
  >
    <tr>{children}</tr>
  </thead>
);
