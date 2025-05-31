export const isEmpty = (str: unknown): boolean => {
    return (
        str === '' ||
        str === null ||
        str === undefined ||
        str === 'undefined' ||
        !str ||
        (Array.isArray(str) && !str.length) ||
        (typeof str === 'object' && Object.entries(str).length === 0)
    );
};
