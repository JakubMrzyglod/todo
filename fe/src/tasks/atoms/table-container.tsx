import { FCC } from '@common-types';
import { TableNoContent } from 'tasks/molecules';

export const TableContainer: FCC = ({ children }) => (
  <div {...{ className: 'overflow-x-auto' }}>
    <table
      {...{
        className: 'w-full text-sm text-left text-gray-500 dark:text-gray-400',
      }}
    >
      {children}
    </table>
    <TableNoContent />
  </div>
);
