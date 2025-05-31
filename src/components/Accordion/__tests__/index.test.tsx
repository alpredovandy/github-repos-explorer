import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Accordion from '@/components/Accordion';

import { AccordionProps } from '../types';

describe('Test components: Accordion', () => {
    const props: AccordionProps = {
        title: 'Test Title',
        content: <div>Test Content</div>,
    };

    const renderAccordion = () => render(<Accordion {...props} />);

    it('Snapshot', () => {
        const { container } = renderAccordion();

        expect(container).toMatchSnapshot();
    });
});
