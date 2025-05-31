import { act, renderHook, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { MessageProps } from '@/components/Message/types';

import { useMessageContext } from '../context';
import MessageProvider from '../provider';
import type { MessageData } from '../types';

const mockMessage = vi.fn();
vi.mock('@/components/Message', () => ({
    default: (props: MessageProps) => {
        mockMessage(props);
        return <div data-testid="message">{JSON.stringify(props)}</div>;
    },
}));

const defaultValue = {
    show: false,
    delay: 3000,
    type: 'info',
    onClose: vi.fn(),
    message: '',
};

describe('@/contexts/Modal: context', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    test('useMessageContext: should return default value', () => {
        const { result } = renderHook(useMessageContext, {
            wrapper: MessageProvider,
        });

        expect(result.current).toMatchObject({
            showMessage: expect.any(Function),
            showSuccessMessage: expect.any(Function),
            showErrorMessage: expect.any(Function),
            closeMessage: expect.any(Function),
        });
    });

    const SHOW_MESSAGE_TESTS = [
        ['showMessage', { show: true, type: 'info' }],
        ['showSuccessMessage', { show: true, type: 'success' }],
        ['showErrorMessage', { show: true, type: 'error' }],
    ];

    // @ts-ignore
    test.each(SHOW_MESSAGE_TESTS)('%s: should show message with correct message and options', (func, options: Omit<MessageData, 'type'>) => {
        const { result } = renderHook(useMessageContext, {
            wrapper: MessageProvider,
        });

        act(() => {
            // @ts-ignore
            result.current[func]({ message: 'Test Message' });
        });

        const message = screen.getByTestId('message');

        expect(message).toHaveTextContent(
            JSON.stringify({
                ...defaultValue,
                ...options,
                message: 'Test Message',
            })
        );
    });

    test('closeMessage: should close message', () => {
        const { result } = renderHook(useMessageContext, {
            wrapper: MessageProvider,
        });

        act(() => {
            result.current.closeMessage();
        });

        const message = screen.getByTestId('message');

        expect(message).toHaveTextContent(
            JSON.stringify({
                ...defaultValue,
                show: false,
            })
        );
    });
});
