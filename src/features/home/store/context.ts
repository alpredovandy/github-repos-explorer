import { createContext, useContext } from 'react';

import { GithubContextProps } from './types';

export const GithubContext = createContext<GithubContextProps>({} as GithubContextProps);

export const useGithubContext = () => useContext(GithubContext);
