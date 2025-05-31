import React, { useEffect, useState } from 'react';

import { isEmpty } from '@/helpers/validation';

import { useGithubByUsernameQuery, useGithubReposByUsernamesQuery } from '../hooks';
import { GithubContext } from './context';
import { GithubState } from './types';

const initialState: GithubState = {
    users: [],
    repositories: [],
    search: '',
};

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<GithubState>(initialState);

    const {
        data: users,
        refetch: refetchUsers,
        isPending: isLoadingUsers,
    } = useGithubByUsernameQuery({
        search: state.search,
        limit: 10,
    });

    const { data: repos, isPending: isLoadingRepos } = useGithubReposByUsernamesQuery(users?.items?.map((user) => user.login) || []);

    useEffect(() => {
        if (!isEmpty(users) && !isEmpty(repos)) {
            update({
                users: users?.items ?? [],
                repositories: repos?.results ?? [],
            });
        }
    }, [users, repos]);

    const update = (data: Partial<GithubState>) => setState((prev) => ({ ...prev, ...data }));

    const reset = () => {
        setState(initialState);
    };

    const refetchData = () => {
        if (!isEmpty(state.search)) {
            refetchUsers();
        }
    };

    console.log('fox repos', repos);

    return (
        <GithubContext.Provider
            value={{
                state,
                isLoading: isLoadingUsers || isLoadingRepos,
                set: update,
                onRefetch: refetchData,
                reset,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
