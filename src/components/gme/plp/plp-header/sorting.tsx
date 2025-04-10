import React from 'react';
import { SORT_OPTIONS } from '@/helpers/constants';

interface sortingProps {
    sortOption: string;
    onSortChange: (option: string) => void;
}

const Sorting: React.FC<sortingProps> = ({ sortOption, onSortChange }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.value;
        onSortChange(option);
    };

    return (
        <div>
            <select
                name='sort'
                id=''
                className='border-my-border-grey w-fit cursor-pointer rounded border p-2 text-start md:w-fit'
                value={sortOption}
                onChange={handleSortChange}>
                {SORT_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Sorting;
