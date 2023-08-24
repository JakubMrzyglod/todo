import { AxiosError } from 'axios';

export type UseApiProps<T> = {
  onSuccess?: (data: T) => void;
  onError?: (err: AxiosError) => void;
};

export type UseApi<P extends Params> = [Call<P>, boolean];

export type Call<P extends Params> = (props: { params?: P }) => Promise<void>;

export type Params = (string | number)[];
