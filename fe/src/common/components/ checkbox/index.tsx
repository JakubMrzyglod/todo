import { FC, HTMLProps } from 'react';

export const Checkbox: FC<CheckboxProps> = (props) => (
  <input
    {...{
      ...props,
      'aria-describedby': 'helper-checkbox-text',
      type: 'checkbox',
      value: '',
      className:
        'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
    }}
  />
);

type CheckboxProps = HTMLProps<HTMLInputElement>;
