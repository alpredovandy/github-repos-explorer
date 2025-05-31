export interface GithubState {
    users: Record<string, unknown>[];
    repositories: Record<string, unknown>[];
    search: string;
}

export interface GithubContextProps {
    state: GithubState;

    isLoading: boolean;

    set: (props: object) => void;

    onRefetch: () => void;

    reset: () => void;
}
