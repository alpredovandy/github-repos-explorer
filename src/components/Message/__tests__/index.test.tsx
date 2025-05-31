import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Message from '@/components/Message';
import type { MessageProps } from '@/components/Message/types';

describe('Test components: Message', () => {
    let props: MessageProps;
    const renderMessage = () => render(<Message {...props} />);

    it('Snapshot', () => {
        const { container } = renderMessage();

        expect(container).toMatchSnapshot();
    });
});
