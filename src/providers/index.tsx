import { ReactNode } from 'react';
import { SWRProvider } from './swr-provider';

export const Providers = ({ children }: { children: ReactNode }) => {
    return <SWRProvider>{children}</SWRProvider>;
};
