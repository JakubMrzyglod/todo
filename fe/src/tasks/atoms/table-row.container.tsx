import { FCC } from '@common-types';

export const TableRowContainer: FCC = (props) => (
  <tr {...{ ...props, className: 'border-b dark:border-gray-700' }} />
);
