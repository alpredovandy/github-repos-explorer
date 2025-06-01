import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { CatalogProps } from '@/features/home/sections/types';

import Home from '..';

const mockCatalog = vi.fn();

const mockGithubUsersData = vi.fn().mockReturnValue({});
const mockGithubReposData = vi.fn().mockReturnValue({});
const mockIsLoading = vi.fn().mockReturnValue(false);

vi.mock('@/contexts/Message/context');

vi.mock('@tanstack/react-query');

vi.mock('@/features/home/sections/Catalog', () => ({
    default: (props: CatalogProps) => {
        mockCatalog(props);
        return <div data-testid="home-catalog" {...props} />;
    },
}));

vi.mock('@/features/home/hooks', () => ({
    useGithubByUsernameQuery: () => ({
        data: mockGithubUsersData,
        isLoading: mockIsLoading,
    }),
    useGithubReposByUsernamesQuery: () => ({
        data: mockGithubReposData,
        isLoading: mockIsLoading,
    }),
}));

describe('@/features: Home', () => {
    test('Snapshot', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});
