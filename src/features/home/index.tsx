import Hero from '@/components/Hero';
import SearchBox from '@/components/SearchBox';
import Catalog from '@/features/home/sections/Catalog.tsx';
import { isEmpty } from '@/helpers/validation';

import { useGithubContext } from './store/context';

const Home = () => {
    const { state, set, onRefetch, reset, isLoading } = useGithubContext();

    console.log('fox state', state);

    return (
        <div className="h-full bg-[#ffffff] py-6 px-8 flex flex-col gap-6 w-full max-w-[768px] shadow-md rounded-md overflow-y-auto scrollbar-thin">
            <Hero />
            <div
                className="flex flex-col gap-3"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onRefetch();
                    }
                }}
            >
                <SearchBox value={state.search} handleSearch={(value) => set({ search: value })} handleClear={reset} placeholder="Enter username" />
                <button
                    className="w-full py-1.5 bg-[#2c9cdb] disabled:bg-gray-300 disabled:text-[#989898] text-[14px] text-white rounded-sm"
                    onClick={onRefetch}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Search'}
                </button>
            </div>

            {!isEmpty(state.search) && !isEmpty(state.repositories) && <span>Showing users for &quot;{state.search}&quot;</span>}

            <Catalog datas={state.repositories} isLoading={isLoading} />
        </div>
    );
};

export default Home;
