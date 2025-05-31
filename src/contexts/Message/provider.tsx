import React, { useCallback, useMemo, useState } from 'react';

import Message from '@/components/Message';

import { MessageContext } from './context';
import type { MessageContextProps, MessageState } from './types';

const initialMessageState: MessageState = {
    show: false,
    data: {},
};

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
    const [message, setMessage] = useState(initialMessageState);

    const showMessage: MessageContextProps['showMessage'] = useCallback((data) => {
        setMessage({
            show: true,
            data,
        });
    }, []);

    const showSuccessMessage: MessageContextProps['showSuccessMessage'] = useCallback(
        (data) => {
            showMessage({
                type: 'success',
                ...data,
            });
        },
        [showMessage]
    );

    const showErrorMessage: MessageContextProps['showErrorMessage'] = useCallback(
        (data) => {
            showMessage({
                type: 'error',
                ...data,
            });
        },
        [showMessage]
    );

    const closeMessage = useCallback(() => {
        setMessage((prev) => ({ ...prev, show: false }));
    }, []);

    const memoizeValue: MessageContextProps = useMemo(
        () => ({
            showMessage,
            showSuccessMessage,
            showErrorMessage,
            closeMessage,
        }),
        [showMessage, showSuccessMessage, showErrorMessage, closeMessage]
    );

    return (
        <MessageContext.Provider value={memoizeValue}>
            {children}
            <Message
                onClose={closeMessage}
                show={message.show}
                delay={3000}
                type={message.data?.type ?? 'info'}
                message={message.data?.message ?? ''}
            />
        </MessageContext.Provider>
    );
};

export default MessageProvider;
