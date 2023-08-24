import { FCC } from '@common-types';

export const AddTaskButtonContainer: FCC = ({ children }) => (
  <div
    {...{
      children,
      className:
        'w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0',
    }}
  />
);
