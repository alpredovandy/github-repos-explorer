import { vi } from 'vitest';

export const MOCK_RESPONSE = { data: {} };
export const mockGet = vi.fn(() => Promise.resolve(MOCK_RESPONSE));

const MockHttpClient = vi.fn().mockImplementation(function (this: any) {
    this.get = mockGet;

    return this;
});

export default MockHttpClient;
