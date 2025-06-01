import { vi } from 'vitest';

export const mockIsLoading = vi.fn().mockReturnValue(false);
export const mockData = vi.fn().mockReturnValue(null);
export const mockUseQuery = vi.fn().mockReturnValue({
    data: mockData(),
    isLoading: mockIsLoading(),
});

export { mockUseQuery as useQuery };
