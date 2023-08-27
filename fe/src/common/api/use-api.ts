import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
      const axiosError = err as AxiosError;
      console.log({ axiosError });
      onError?.(axiosError);
      showError(axiosError);
    } finally {
      setLoading(false);
    }
  };

  return [call, loading];
};

const showError = (err: AxiosError) => {
  const status = err.response?.status ?? 0;
  const errorMessage = errorMessageMap[status] ?? DEFAULT_ERROR_MESSAGE;
  toast.error(errorMessage);
};

const errorMessageMap: Record<number, string> = {
  404: 'Item not found',
  400: 'Invalid request data',
};

const DEFAULT_ERROR_MESSAGE = 'Opss! Something went wrong';
