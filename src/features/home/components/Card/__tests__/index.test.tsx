import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Card from '@/features/home/components/Card';
import type { CardProps } from '@/features/home/components/Card/types';

describe('Test components: Card', () => {
    const props: CardProps = { data: {} as any, isLoading: false };

    const renderCard = () => render(<Card {...props} />);

    it('Snapshot', () => {
        const { container } = renderCard();

        expect(container).toMatchSnapshot();
    });
});
