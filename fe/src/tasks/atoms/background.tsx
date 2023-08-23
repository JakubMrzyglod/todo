import { FCC } from '../../common';

export const Background: FCC = (props) => (
  <div
    {...{ ...props, className: 'bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 min-h-screen' }}
  />
);
