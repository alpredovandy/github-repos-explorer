import { vi } from 'vitest';

export const mockIsPending = vi.fn().mockReturnValue(false);
export const mockData = vi.fn().mockReturnValue(null);
export const mockUseQuery = vi.fn().mockReturnValue({
    data: mockData(),
    isPending: mockIsPending(),
});

export { mockUseQuery as useQuery };
