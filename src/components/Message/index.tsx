import { FC, useEffect } from 'react';

import { MessageProps } from '@/components/Message/types';

const Message: FC<MessageProps> = ({ show, onClose, delay = 3000, message, type }) => {
    const alertType = type === 'success' ? 'alert-success' : 'alert-error';

    useEffect(() => {
        if (delay) {
            setTimeout(() => {
                onClose();
            }, delay);
        }
    }, [show, delay, onClose]);

    if (!show) return null;

    return (
        <div className="toast toast-top toast-end">
            <div className={`alert ${alertType ?? 'alert-info'}`}>
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Message;
