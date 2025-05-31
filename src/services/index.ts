import HttpClient from './adapters/HttpClient';
import GithubService from './GithubService';

const httpClient = new HttpClient();

export const githubService = new GithubService(httpClient);
