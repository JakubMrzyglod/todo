export type FormProps<T = unknown> = {
  onSubmit: (data: T) => void;
  className?: string;
};
