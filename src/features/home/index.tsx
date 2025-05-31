import Hero from '@/components/Hero';
import SearchBox from '@/components/SearchBox';
import Catalog from '@/features/home/sections/Catalog.tsx';
import { isEmpty } from '@/helpers/validation';

import { useGithubContext } from './store/context';

const Home = () => {
    const { state, set, onRefetch, reset } = useGithubContext();

    return (
        <div className="h-screen bg-[#ffffff] py-6 px-8 flex flex-col gap-6 w-full max-w-[768px] shadow-md rounded-md overflow-y-auto scrollbar-thin">
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
                <button className="w-full py-1.5 bg-[#2c9cdb] text-[14px] text-white rounded-sm" onClick={onRefetch}>
                    Search
                </button>
            </div>

            {!isEmpty(state.search) && <span>Showing users for &quot;{state.search}&quot;</span>}

            <Catalog datas={[]} isPending={false} />
        </div>
    );
};

export default Home;
