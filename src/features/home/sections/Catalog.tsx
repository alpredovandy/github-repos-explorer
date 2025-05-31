import { FC, Fragment } from 'react';

import Card from '@/components/Card';
import { CatalogProps } from '@/features/home/sections/types';

const Catalog: FC<CatalogProps> = ({ datas, isPending }) => {
    if (isPending)
        return (
            <div className="flex flex-col gap-8 mt-1">
                {new Array(10).fill(0).map((_, index) => (
                    <Card key={`skeleton-${index}`} data={{}} isLoading={true} />
                ))}
            </div>
        );

    return (
        <div className="mt-1">
            {datas?.length > 0 && (
                <div className="flex flex-col">
                    {datas?.map((data, idx) => {
                        const key = typeof (data as any).slug === 'string' ? (data as any).slug : idx;
                        return (
                            <Fragment key={key}>
                                <Card data={data} isLoading={isPending} />
                            </Fragment>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Catalog;
