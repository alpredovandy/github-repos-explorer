import { createContext, useContext } from 'react';

import type { MessageContextProps } from './types';

export const MessageContext = createContext<MessageContextProps>({} as MessageContextProps);

export const useMessageContext = () => {
    const value = useContext(MessageContext);

    return value;
};
