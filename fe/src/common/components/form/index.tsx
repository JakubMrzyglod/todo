import { FCC } from '@common-types';
import { FormProvider, useForm } from 'react-hook-form';

import { FormProps } from './types';

export const Form: FCC<FormProps> = ({ children, onSubmit, className }) => {
  const methods = useForm();
  const formProps = {
    onSubmit: methods.handleSubmit(onSubmit),
    className,
  };

  return (
    <FormProvider {...methods}>
      <form {...formProps}>{children}</form>
    </FormProvider>
  );
};
