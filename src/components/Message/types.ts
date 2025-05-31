export interface MessageProps {
    show: boolean;
    onClose: () => void;
    delay?: number;
    message: string;
    type: 'success' | 'error' | 'info';
}
