export const getSortIndicator = (
    key: string,
    sortConfig: {
        key: string;
        direction: 'asc' | 'desc';
    } | null
) => {
    if (!sortConfig || sortConfig.key !== key) {
        return (
            <span className='ml-1 flex'>
                <span className='text-gray-400'>↑</span>
                <span className='text-gray-400'>↓</span>
            </span>
        );
    }

    return (
        <span className='ml-1 flex'>
            <span className={sortConfig.direction === 'asc' ? 'text-white' : 'text-gray-400'}>↑</span>
            <span className={sortConfig.direction === 'desc' ? 'text-white' : 'text-gray-400'}>↓</span>
        </span>
    );
};
