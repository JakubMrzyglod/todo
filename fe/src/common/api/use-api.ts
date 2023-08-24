import axios, { AxiosError } from 'axios';
import { useState } from 'react';

import { ApiDetails, UseApi, UseApiProps } from './types';

export const useApi = <Req, Res>(
  [path, method]: ApiDetails,
  props?: UseApiProps<Res>,
): UseApi<Req> => {
  const { onSuccess, onError } = props ?? {};
  const [loading, setLoading] = useState(false);
  const baseURL = 'http://localhost:3000';

  const call = async (data?: Req) => {
    setLoading(true);
    try {
      const res = await axios[method]<Res>(baseURL + path, data);
      onSuccess?.(res.data);
    } catch (err) {
      onError?.(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  return [call, loading];
};
