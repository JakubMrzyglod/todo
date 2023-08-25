import { AxiosError } from 'axios';

export type UseApiProps<T> = {
  onSuccess?: (data: T) => void;
  onError?: (err: AxiosError) => void;
};

export type UseApi<D = undefined> = [(data?: D) => Promise<void>, boolean];

export enum HttpMethod {
  DELETE = 'delete',
  POST = 'post',
  PATCH = 'patch',
}

export type ApiDetails = [path: string, httpMethod: HttpMethod];
