'use client';

import { useState } from 'react';

const EntriesPerPage = () => {
    const [entries, setEntries] = useState(10);

    return (
        <div className='relative inline-block'>
            <select
                value={entries}
                onChange={(e) => setEntries(Number(e.target.value))}
                className='appearance-none border bg-white px-2 py-1 pr-6'>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            <div className='pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 transform flex-col'>
                <span className='text-xs text-gray-400'>▲</span>
                <span className='text-xs text-gray-400'>▼</span>
            </div>
        </div>
    );
};

export default EntriesPerPage;
