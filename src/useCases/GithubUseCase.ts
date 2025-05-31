import { GithubRepositoriesByUsernameType, GithubUsersByUsernameType } from '@/domains/Github';
import type { PaginateRequestType } from '@/domains/Response';
import type { GithubServiceType } from '@/services/GithubService';

export interface GithubUseCaseType {
    getByUsername(params: PaginateRequestType): Promise<GithubUsersByUsernameType>;

    getReposByUsernames: (usernames: string[]) => Promise<{ results: { username: string; repositories: GithubRepositoriesByUsernameType }[] }>;
}

class GithubUseCase implements GithubUseCaseType {
    private _githubService: GithubServiceType;

    constructor(githubService: GithubServiceType) {
        this._githubService = githubService;
    }

    getByUsername: GithubUseCaseType['getByUsername'] = async (params) => {
        const { search } = params;

        const response = await this._githubService.getByUsername(params);
        const sortedFiltered = [];

        if (search) {
            const filtered = response.items.filter((res) => res.login.toLowerCase().includes(search?.toLowerCase()));
            sortedFiltered.push(...filtered.sort((a, b) => b.score - a.score));
        }

        return { ...response, items: sortedFiltered?.slice(0, 5) };
    };

    getReposByUsernames: GithubUseCaseType['getReposByUsernames'] = async (usernames) => {
        if (!usernames?.length) return { results: [] };

        return await this._githubService.getReposByUsernames(usernames);
    };
}

export default GithubUseCase;
