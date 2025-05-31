// import { render } from '@testing-library/react';
// import { describe, expect, test, vi } from 'vitest';

// import { MOCK_GIFS } from '@/domains/__mocks__/Gif.ts';
// import { CatalogProps } from '@/features/home/sections/types';

// import Home from '..';

// const mockCatalog = vi.fn();
// vi.mock('@/features/home/sections/Catalog', () => ({
//     default: (props: CatalogProps) => {
//         mockCatalog(props);
//         return <div data-testid="home-catalog" {...props} />;
//     },
// }));

// vi.mock('@tanstack/react-query', () => ({
//     useQuery: () => ({
//         data: MOCK_GIFS,
//         isPending: false,
//     }),
// }));

// describe('@/modules: Home', () => {
//     test('Snapshot', () => {
//         const { container } = render(<Home />);

//         expect(container).toMatchSnapshot();
//     });
// });
