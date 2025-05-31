import { githubService } from '@/services';

import GithubUseCase from './GithubUseCase';

export const githubUseCase = new GithubUseCase(githubService);
