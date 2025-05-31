import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type Queries, type queries, renderHook, type RenderHookOptions } from '@testing-library/react';

import { QUERY_CLIENT_OPTIONS } from '@/constants/queryClient';

export const renderHookWithQuery = <
    Result,
    Props,
    Q extends Queries = typeof queries,
    Container extends Element | DocumentFragment = HTMLElement,
    BaseElement extends Element | DocumentFragment = Container,
>(
    render: (initialProps: Props) => Result,
    options?: RenderHookOptions<Props, Q, Container, BaseElement>
) =>
    renderHook(render, {
        wrapper: (props) => {
            const queryClient = new QueryClient(QUERY_CLIENT_OPTIONS);
            return <QueryClientProvider client={queryClient} {...props} />;
        },
        ...options,
    });
