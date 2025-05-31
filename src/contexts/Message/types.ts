export interface MessageData {
    type?: 'success' | 'error' | 'info';
    message?: string;
}

export interface MessageState {
    /** open message */
    show: boolean;

    /** message data */
    data?: MessageData;
}

export interface MessageContextProps {
    showMessage: (props: MessageData) => void;
    showSuccessMessage: (props: Omit<MessageData, 'type'>) => void;
    showErrorMessage: (props: Omit<MessageData, 'type'>) => void;
    closeMessage: () => void;
}
