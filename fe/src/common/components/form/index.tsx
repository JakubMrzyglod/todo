import { FCC } from '@common-types';
import { FormProvider } from 'react-hook-form';

import { FormProps } from './types';

export const Form: FCC<FormProps> = ({ children, onSubmit, disabled, methods }) => {
  const formProps = {
    onSubmit: methods.handleSubmit(onSubmit),
    className: 'flex items-center',
  };

  return (
    <FormProvider {...methods}>
      <form {...formProps}>
        <fieldset {...{ disabled, className: 'w-full' }}>{children}</fieldset>
      </form>
    </FormProvider>
  );
};
