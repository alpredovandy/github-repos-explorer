import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MOCK_GITHUB_REPOSITORIES_BY_USERNAMES, MOCK_GITHUB_USERS_BY_USERNAME } from '@/domains/__mocks__/Github';
import type * as MockHttpClient from '@/services/adapters/__mocks__/HttpClient';
import * as HttpClient from '@/services/adapters/HttpClient';

import { githubUseCase } from '..';

vi.mock('@/services/adapters/HttpClient');

const { mockGet } = HttpClient as typeof MockHttpClient;

const mockParams = {
    search: 'duy',
    limit: 10,
};

const mockUsernames = ['duy'];

describe('@/useCases: GithubUseCase', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('getByUsername: should return response correctly', async () => {
        mockGet.mockImplementation(() => Promise.resolve(MOCK_GITHUB_USERS_BY_USERNAME));

        const result = await githubUseCase.getByUsername(mockParams);

        expect(result).toMatchObject(MOCK_GITHUB_USERS_BY_USERNAME);
    });

    it('getByUsername: should return object empty when not have data', async () => {
        mockGet.mockImplementation(() =>
            Promise.resolve({
                data: {
                    total_count: 0,
                    incomplete_results: false,
                    items: [],
                },
            })
        );

        const result = await githubUseCase.getByUsername({ search: '', limit: 0 });

        expect(result).toMatchObject({
            data: {
                total_count: 0,
                incomplete_results: false,
                items: [],
            },
        });
    });

    it('getReposByUsernames: should return response correctly', async () => {
        mockGet.mockImplementation(() => Promise.resolve(MOCK_GITHUB_REPOSITORIES_BY_USERNAMES));

        const result = await githubUseCase.getReposByUsernames(mockUsernames);

        expect(result).toEqual([
            {
                username: mockUsernames[0],
                repositories: MOCK_GITHUB_REPOSITORIES_BY_USERNAMES,
            },
        ]);
    });

    it('getReposByUsernames: should return object empty when not have data', async () => {
        mockGet.mockImplementation(() =>
            Promise.resolve({
                data: [],
            })
        );

        const result = await githubUseCase.getReposByUsernames([]);

        expect(result).toMatchObject([]);
    });
});
