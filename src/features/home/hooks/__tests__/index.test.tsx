// import { waitFor } from '@testing-library/react';
// import { beforeEach, describe, expect, it, vi } from 'vitest';

// import { MOCK_GIFS } from '@/domains/__mocks__/Gif';
// import { renderHookWithQuery } from '@/helpers/render-test';
// import type * as MockHttpClient from '@/services/adapters/__mocks__/HttpClient';
// import * as HttpClient from '@/services/adapters/HttpClient';

// import { useGifsQuery } from '..';

// vi.mock('@/services/adapters/HttpClient');
// const { mockGet } = HttpClient as unknown as typeof MockHttpClient;

// vi.unmock('@tanstack/react-query');

// const mockShowError = vi.fn().mockImplementation(() => ({
//     message: 'Oops, something went wrong!',
// }));

// vi.mock('@/contexts/Message/context', () => ({ useMessageContext: () => ({ showErrorMessage: mockShowError }) }));

// describe('Test modules Home: hooks', () => {
//     beforeEach(() => {
//         vi.clearAllMocks();
//     });

//     it('useGifsQuery should return response correctly', async () => {
//         mockGet.mockImplementation(() => Promise.resolve(MOCK_GIFS));

//         const { result } = renderHookWithQuery(useGifsQuery, {
//             initialProps: {
//                 limit: 10,
//                 type: 'categories',
//             },
//         });

//         await waitFor(() => {
//             expect(result.current.data).toMatchObject(MOCK_GIFS);
//         });
//     });

//     it('useGifsQuery should show error message', async () => {
//         mockGet.mockImplementation(() => Promise.reject());

//         renderHookWithQuery(useGifsQuery, {
//             initialProps: {
//                 limit: 10,
//                 type: '',
//             },
//         });

//         await waitFor(() => {
//             expect(mockShowError).toHaveBeenCalledWith({
//                 message: 'Oops, something went wrong!',
//             });
//         });
//     });
// });
