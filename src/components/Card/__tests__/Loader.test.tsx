import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import CardLoader from '@/components/Card/Loader';

describe('Test components: CardLoader', () => {
    const renderCardLoader = () => render(<CardLoader />);

    it('Snapshot', () => {
        const { container } = renderCardLoader();

        expect(container).toMatchSnapshot();
    });
});
