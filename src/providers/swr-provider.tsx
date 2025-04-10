'use client';

import { SWRConfig } from 'swr';
import { ClientFetcher } from '@/lib/api-hub';

export function SWRProvider({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig
            value={{
                fetcher: ClientFetcher,
                revalidateOnFocus: false,
                shouldRetryOnError: false
            }}>
            {children}
        </SWRConfig>
    );
}
