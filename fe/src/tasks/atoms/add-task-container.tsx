import { FCC } from '@common-types';

export const AddTaskContainer: FCC = ({ children }) => (
  <div
    {...{
      children,
      className:
        'flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 w-full',
    }}
  />
);
