import { FC } from 'react';

import Card from '@/features/home/components/Card';
import { CatalogProps } from '@/features/home/sections/types';

const Catalog: FC<CatalogProps> = ({ datas, isLoading }) => {
    if (isLoading)
        return (
            <div className="flex flex-col gap-8 mt-1">
                {new Array(8).fill(0).map((_, index) => (
                    <Card key={`skeleton-${index}`} data={{}} isLoading={true} />
                ))}
            </div>
        );

    return (
        <div className="mt-1">
            {datas?.length > 0 && (
                <div className="flex flex-col gap-2">
                    {datas?.map((data, idx) => {
                        const key = typeof (data as any).slug === 'string' ? (data as any).slug : idx;
                        return <Card key={key} data={data} isLoading={isLoading} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default Catalog;
