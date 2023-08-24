import axios, { AxiosError } from 'axios';
import { useState } from 'react';

import { ApiAction, ApiActionDetails } from './api-action';
import { Call, Params, UseApi, UseApiProps } from './types';

export const useApi = <P extends Params, Res>(
  action: ApiAction,
  props: UseApiProps<Res> = {},
): UseApi<P> => {
  const { onSuccess, onError } = props;
  const [getPath, method] = ApiActionDetails[action];
  const [loading, setLoading] = useState(false);
  const baseURL = 'http://localhost:3000';

  const call: Call<P> = async ({ params }) => {
    const path =
      typeof getPath === 'string'
        ? getPath
        : getPath(params as unknown as string | number);
    setLoading(true);

    try {
      const res = await axios[method](baseURL + path);
      onSuccess?.(res.data);
    } catch (err) {
      onError?.(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  return [call, loading];
};
