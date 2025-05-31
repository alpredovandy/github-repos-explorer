import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useMessageContext } from '@/contexts/Message/context';
import { PaginateRequestType } from '@/domains/Response.ts';
import { isEmpty } from '@/helpers/validation';
import { githubUseCase } from '@/useCases';

export const useGithubByUsernameQuery = (params: PaginateRequestType, enabled = false) => {
    const { showErrorMessage } = useMessageContext();

    const query = useQuery({
        queryKey: ['githubUseCase.getByUsername', params],
        queryFn: async () => await githubUseCase.getByUsername(params),
        enabled,
    });

    useEffect(() => {
        if (query.isError) {
            showErrorMessage({ message: 'Oops, something went wrong!' });
        }
    }, [query.isError, showErrorMessage]);

    return query;
};

export const useGithubReposByUsernamesQuery = (usernames: string[]) => {
    return useQuery({
        queryKey: ['githubUseCase.getReposByUsernames', usernames],
        queryFn: async () => await githubUseCase.getReposByUsernames(usernames),
        enabled: !isEmpty(usernames),
    });
};
