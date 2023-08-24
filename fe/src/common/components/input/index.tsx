import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputProps } from './types';

export const Input: FC<InputProps> = ({ name, ...htmlInputProps }) => {
  const { register } = useFormContext();
  return <input {...{ ...register(name), ...htmlInputProps }} />;
};
