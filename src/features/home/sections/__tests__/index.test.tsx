// import { render } from '@testing-library/react';
// import { describe, expect, it, vi } from 'vitest';

// import { MOCK_GIFS } from '@/domains/__mocks__/Gif.ts';
// import type { CatalogProps } from '@/features/home/sections/types';

// import Catalog from '../Catalog';

// describe('Test Home/section: Catalog', () => {
//     // @ts-ignore
//     const renderCatalog = (props?: CatalogProps) => render(<Catalog gifs={MOCK_GIFS.data ?? []} {...props} />);

//     it('Snapshot', () => {
//         const { container } = renderCatalog();

//         expect(container).toMatchSnapshot();
//     });

//     it('should show loading when has isPending props true', () => {
//         renderCatalog({
//             gifs: [],
//             isPending: true,
//             loadButton: vi.fn(),
//             showButton: true,
//         });
//     });
// });
