import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MOCK_GITHUB_REPOSITORIES_BY_USERNAMES } from '@/domains/__mocks__/Github';
import type { CatalogProps } from '@/features/home/sections/types';

import Catalog from '../Catalog';

describe('Test Home/section: Catalog', () => {
    // @ts-ignore
    const renderCatalog = (props?: CatalogProps) => render(<Catalog datas={MOCK_GITHUB_REPOSITORIES_BY_USERNAMES.data ?? []} {...props} />);

    it('Snapshot', () => {
        const { container } = renderCatalog();

        expect(container).toMatchSnapshot();
    });

    it('should show loading when has isPending props true', () => {
        renderCatalog({
            datas: [],
            isLoading: true,
        });
    });
});
