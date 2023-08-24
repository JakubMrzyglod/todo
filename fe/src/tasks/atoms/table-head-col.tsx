import { FCC } from '@common-types';

export const TableHeadCol: FCC = (...props) => (
  <th {...{ ...props, scope: 'col', className: 'px-4 py-3' }} />
);
