const CardLoader = () => (
    <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3 skeleton h-6 w-full rounded" />
        <div className="col-span-1" />
        <div className="col-span-2">
            <div className="skeleton h-6 w-full rounded mt-2" />
            <div className="skeleton h-4 w-full rounded mt-2" />
        </div>
    </div>
);

export default CardLoader;
