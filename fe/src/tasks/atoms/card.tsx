import { FCC } from '../../common';

export const Card: FCC = (props) => (
  <div
    {...{
      ...props,
      className:
        'bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden',
    }}
  />
);
