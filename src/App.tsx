import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QUERY_CLIENT_OPTIONS } from '@/constants/queryClient.ts';
import MessageProvider from '@/contexts/Message/provider';
import Home from '@/features/home';

import { GithubProvider } from './features/home/store/provider';

const App = () => {
    const [queryClient] = useState(() => new QueryClient(QUERY_CLIENT_OPTIONS));

    return (
        <QueryClientProvider client={queryClient}>
            <MessageProvider>
                <div className="bg-[#e5e5e5] flex justify-center items-center p-12">
                    <GithubProvider>
                        <Home />
                    </GithubProvider>
                </div>
            </MessageProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
