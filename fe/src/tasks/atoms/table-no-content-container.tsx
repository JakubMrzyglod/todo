import { FCC } from '@common-types';

export const TableNoContentContainer: FCC = ({ children }) => (
  <div {...{ className: 'flex items-center justify-center w-full' }}>
    <div {...{ className: 'flex flex-col items-center justify-center pt-20 pb-20' }}>
      {children}
    </div>
  </div>
);
