import { FCC } from '../../common';

export const Content: FCC = (props) => (
  <div {...{ ...props, className: 'mx-auto max-w-screen-xl px-4 lg:px-12' }} />
);
