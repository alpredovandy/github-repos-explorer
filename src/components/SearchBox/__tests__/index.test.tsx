import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SearchBox from '@/components/SearchBox';
import type { SearchBoxProps } from '@/components/SearchBox/types';

describe('Test components: SearchBox', () => {
    let props: SearchBoxProps;
    const renderSearchBox = () => render(<SearchBox {...props} />);

    it('Snapshot', () => {
        const { container } = renderSearchBox();

        expect(container).toMatchSnapshot();
    });
});
