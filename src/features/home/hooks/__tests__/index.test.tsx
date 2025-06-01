import { waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MOCK_GITHUB_REPOSITORIES_BY_USERNAMES, MOCK_GITHUB_USERS_BY_USERNAME } from '@/domains/__mocks__/Github';
import { renderHookWithQuery } from '@/helpers/render-test';
import type * as MockHttpClient from '@/services/adapters/__mocks__/HttpClient';
import * as HttpClient from '@/services/adapters/HttpClient';

import { useGithubByUsernameQuery, useGithubReposByUsernamesQuery } from '..';

vi.mock('@/services/adapters/HttpClient');
const { mockGet } = HttpClient as unknown as typeof MockHttpClient;

const mockShowError = vi.fn().mockImplementation(() => ({
    message: 'Oops, something went wrong!',
}));

vi.mock('@/contexts/Message/context', () => ({ useMessageContext: () => ({ showErrorMessage: mockShowError }) }));

describe('Test modules Home: hooks', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('useGithubByUsernameQuery should return response correctly', async () => {
        mockGet.mockImplementation(() => Promise.resolve(MOCK_GITHUB_USERS_BY_USERNAME));

        const { result } = renderHookWithQuery(useGithubByUsernameQuery, {
            initialProps: {
                search: 'duy',
                limit: 10,
            },
        });

        result.current.refetch(); // Ensure the query is executed

        await waitFor(() => {
            expect(result.current).toMatchObject({
                data: MOCK_GITHUB_USERS_BY_USERNAME,
            });
        });
    });

    it('useGithubByUsernameQuery should call showErrorMessage on error', async () => {
        const mockError = new Error('Oops, something went wrong!');
        mockGet.mockImplementation(() => Promise.reject(mockError));

        const { result } = renderHookWithQuery(useGithubByUsernameQuery, {
            initialProps: {
                type: 'duy',
                limit: 10,
            },
        });

        result.current.refetch(); // Ensure the query is executed

        await waitFor(() => {
            expect(mockShowError).toHaveBeenCalledWith({
                message: 'Error: Oops, something went wrong!',
            });
        });
    });

    it('useGithubReposByUsernamesQuery should return response correctly', async () => {
        mockGet.mockImplementation(() => Promise.resolve(MOCK_GITHUB_REPOSITORIES_BY_USERNAMES));

        const { result } = renderHookWithQuery(useGithubReposByUsernamesQuery, {
            initialProps: ['duy'],
        });

        result.current.refetch(); // Ensure the query is executed

        await waitFor(() => {
            expect(result.current.data).toEqual([
                {
                    username: 'duy',
                    repositories: MOCK_GITHUB_REPOSITORIES_BY_USERNAMES,
                },
            ]);
        });
    });

    it('useGithubReposByUsernamesQuery should call showErrorMessage on error', async () => {
        const mockError = new Error('Oops, something went wrong!');
        mockGet.mockImplementation(() => Promise.reject(mockError));

        renderHookWithQuery(useGithubReposByUsernamesQuery, {
            initialProps: ['duy'],
        });

        await waitFor(() => {
            expect(mockShowError).toHaveBeenCalledWith({
                message: 'Error: Oops, something went wrong!',
            });
        });
    });
});
