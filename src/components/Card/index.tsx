import { FC } from 'react';

import CardLoader from '@/components/Card/Loader.tsx';
import { CardProps } from '@/components/Card/types.ts';

const Card: FC<CardProps> = ({ data, isLoading }) => {
    if (isLoading) return <CardLoader />;

    return (
        <div className="card w-46 bg-white shadow-xl">
            <span>{data.title}</span>
            <span>{data.stars}</span>
            <span>{data.description}</span>
        </div>
    );
};

export default Card;
