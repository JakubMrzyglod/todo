import { FC, ReactNode } from 'react';

export type FCC<T = object> = FC<{ children: ReactNode } & T>;
