import { UseFormReturn } from 'react-hook-form';

export type FormProps<T = unknown> = {
  onSubmit: (data: T) => void;
  methods: UseFormReturn;
  disabled?: boolean;
};
