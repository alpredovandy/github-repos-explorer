import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '@/components/Hero';

describe('Test components: Hero', () => {
    const renderHero = () => render(<Hero />);

    it('Snapshot', () => {
        const { container } = renderHero();

        expect(container).toMatchSnapshot();
    });
});
