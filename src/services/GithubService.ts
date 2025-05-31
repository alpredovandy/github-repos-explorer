import { GithubRepositoriesByUsernameType, GithubUsersByUsernameType } from '@/domains/Github';
import { type PaginateRequestType } from '@/domains/Response';
import type HttpClient from '@/services/adapters/HttpClient';

export interface GithubServiceType {
    getByUsername(params: PaginateRequestType): Promise<GithubUsersByUsernameType>;

    getReposByUsernames: (usernames: string[]) => Promise<{ results: { username: string; repositories: GithubRepositoriesByUsernameType }[] }>;
}

class GithubService implements GithubServiceType {
    private _http: HttpClient;

    constructor(httpClient: HttpClient) {
        this._http = httpClient;
    }

    getByUsername: GithubServiceType['getByUsername'] = ({ type = 'search', search, limit = 10, ...params }) => {
        return this._http.get('/search/users', {
            params: { ...params, per_page: limit, q: search },
        });
    };

    getReposByUsernames: GithubServiceType['getReposByUsernames'] = async (usernames) => {
        const results: { username: string; repositories: GithubRepositoriesByUsernameType }[] = [];

        for (const username of usernames) {
            try {
                const repos = await this._http.get<GithubRepositoriesByUsernameType>(`/users/${username}/repos`);
                results.push({ username, repositories: repos });
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An error occurred while fetching repositories';
                throw new Error(errorMessage);
            }
        }
        return { results };
    };
}

export default GithubService;
