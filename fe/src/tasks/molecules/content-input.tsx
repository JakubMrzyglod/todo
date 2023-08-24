import { Input } from '@components';
import { FC } from 'react';

export const ContentInput: FC = () => (
  <Input
    {...{
      name: 'content',
      placeholder: 'Content',
      type: 'text',
      className:
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
    }}
  />
);
