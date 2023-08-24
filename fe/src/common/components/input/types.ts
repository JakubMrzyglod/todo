import { HTMLProps } from 'react';

export type InputProps = {
  name: string;
  className: string;
} & HTMLProps<HTMLInputElement>;
