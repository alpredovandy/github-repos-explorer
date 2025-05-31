import axios from 'axios';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import HttpClient from '../HttpClient';

vi.mock('axios');

const mockGet = vi.fn();
(axios as { create: () => void }).create = vi.fn(() => ({
    interceptors: { response: { use: vi.fn() }, request: { use: vi.fn() } },
    get: mockGet,
}));

type TestCases = ['get', string, Mock];

describe('Test @/services/adapters: HTTPClient', () => {
    const httpClient = () =>
        new HttpClient({
            baseURL: 'mock-base-url/',
        });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('constructor: should initialize client', () => {
        httpClient();

        expect(axios.create).toHaveBeenCalledWith({
            baseURL: 'mock-base-url/',
        });
    });

    const getCases: TestCases[] = [['get', 'GET', mockGet]];
    it.each(getCases)('%s: should call api with method %s', (fn, _, mockFn) => {
        httpClient()[fn]('mock-path', {
            params: { id: 'mock-id' },
        });

        expect(mockFn).toHaveBeenCalledWith('mock-base-url/mock-path', {
            params: { id: 'mock-id' },
        });
    });
});
