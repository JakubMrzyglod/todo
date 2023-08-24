import { FCC } from '@common-types';

export const TableHeadCol: FCC = ({ children }) => (
  <th {...{ children, scope: 'col', className: 'px-4 py-3' }} />
);
