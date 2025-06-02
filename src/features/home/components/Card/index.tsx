import { FC } from 'react';

import Accordion from '@/components/Accordion';
import CardLoader from '@/features/home/components/Card/Loader';
import { CardProps } from '@/features/home/components/Card/types';
import { truncateText } from '@/helpers/string';

const Card: FC<CardProps> = ({ data, isLoading }) => {
    if (isLoading) return <CardLoader />;

    return (
        <Accordion
            title={data?.username ?? '-'}
            content={
                <>
                    {data?.repositories && data?.repositories?.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {data?.repositories?.map((repo, index: number) => (
                                <div key={index} className="flex flex-col p-3 h-fit bg-[#e0e0e0] rounded-sm">
                                    <div className="flex flex-row justify-between flex-wrap">
                                        <span className="text-[#000000] font-bold text-[18px] break-words">{repo.name}</span>
                                        <span className="text-[#000000] font-bold flex flex-row items-center gap-1.5">
                                            {repo.stargazers_count ?? 0}
                                            <svg
                                                key={index}
                                                className="w-4 h-4"
                                                fill="#000000"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a.75.75 0 00.702.523h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a.75.75 0 00-.272.776l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a.75.75 0 00-.882 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.956a.75.75 0 00-.272-.776L2.92 9.216c-.783-.57-.38-1.81.588-1.81h4.162a.75.75 0 00.702-.523l1.286-3.956z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <span className="text-[#000000] text-[15px] mt-1 break-words">{truncateText(repo.description, 150)}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <span className="text-[#000000]">No repositories found</span>
                    )}
                </>
            }
        />
    );
};

export default Card;
