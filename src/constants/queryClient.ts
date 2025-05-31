import type { QueryClientConfig } from '@tanstack/react-query';

export const QUERY_CLIENT_OPTIONS: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        },
    },
};
