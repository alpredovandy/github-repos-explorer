export function truncateText(text: string | undefined | null, maxLength: number): string {
    if (text === undefined || text === null) {
        return '';
    }
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}
