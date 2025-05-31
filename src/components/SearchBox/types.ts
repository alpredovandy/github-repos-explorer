export interface SearchBoxProps {
    handleSearch: (search: string) => void;
    handleClear: () => void;
    value: string;
    placeholder?: string;
}
