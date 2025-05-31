import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Card from '@/components/Card';
import type { CardProps } from '@/components/Card/types';

describe('Test components: Card', () => {
    let props: CardProps;
    const renderCard = () => render(<Card {...props} />);

    it('Snapshot', () => {
        const { container } = renderCard();

        expect(container).toMatchSnapshot();
    });
});
