import React from 'react';

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
                className='w-fit cursor-pointer rounded border border-gray-300 p-2 text-start md:w-fit'
                value={sortOption}
                onChange={handleSortChange}>
                <option value='relevance'>Relevance</option>
                <option value='price-low-high'>Price (low to high)</option>
                <option value='price-high-low'>Price (high to low)</option>
            </select>
        </div>
    );
};

export default Sorting;
