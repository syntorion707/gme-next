'use client';

import React, { useState } from 'react';

type Props = {
    selectedFilters?: {
        brimType: string[];
        color: string[];
        manufacturer: string[];
    };
    handleFilterChange?: (filterType: 'brimType' | 'color' | 'manufacturer', value: string, isChecked: boolean) => void;
    handleClearFilters?: () => void;
};

const Filters = ({
    selectedFilters = { brimType: [], color: [], manufacturer: [] },
    handleFilterChange = () => {},
    handleClearFilters = () => {}
}: Props) => {
    const [expandedFilters, setExpandedFilters] = useState({
        brimType: true,
        color: true,
        manufacturer: true
    });

    const brimTypes = ['Snapback', 'Dad Hat', 'Trucker', '5-Panel', 'Bucket'];
    const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Gray'];
    const manufacturers = ['New Era', 'Nike', 'Adidas', 'Under Armour', 'Puma'];

    const toggleFilter = (filterName: keyof typeof expandedFilters) => {
        setExpandedFilters({
            ...expandedFilters,
            [filterName]: !expandedFilters[filterName]
        });
    };

    const hasSelectedFilters =
        selectedFilters.brimType.length > 0 ||
        selectedFilters.color.length > 0 ||
        selectedFilters.manufacturer.length > 0;

    const removeFilter = (filterType: 'brimType' | 'color' | 'manufacturer', value: string) => {
        handleFilterChange(filterType, value, false);
    };

    return (
        <div className='hidden h-fit w-fit min-w-72 overflow-hidden border border-gray-300 transition-all duration-300 lg:block xl:block'>
            {hasSelectedFilters && (
                <div className='border-b border-gray-300 p-6'>
                    <h3 className='font-semibold'>Selected Filters</h3>
                    <div className='mt-4 flex flex-col gap-2'>
                        {selectedFilters.brimType.map((filter) => (
                            <div key={`color-${filter}`} className='flex items-center'>
                                <button
                                    onClick={() => removeFilter('brimType', filter)}
                                    className='text-center text-red-600'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='18'
                                        height='18'
                                        fill='currentColor'
                                        className='bi bi-x'
                                        viewBox='0 0 16 16'>
                                        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
                                    </svg>
                                </button>
                                <span
                                    className='cursor-pointer rounded-full text-sm'
                                    onClick={() => removeFilter('brimType', filter)}>
                                    {filter}
                                </span>
                            </div>
                        ))}
                        {selectedFilters.color.map((filter) => (
                            <div key={`color-${filter}`} className='flex items-center'>
                                <button
                                    onClick={() => removeFilter('color', filter)}
                                    className='text-center text-red-600'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='18'
                                        height='18'
                                        fill='currentColor'
                                        className='bi bi-x'
                                        viewBox='0 0 16 16'>
                                        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
                                    </svg>
                                </button>
                                <span
                                    className='cursor-pointer rounded-full text-sm'
                                    onClick={() => removeFilter('color', filter)}>
                                    {filter}
                                </span>
                            </div>
                        ))}
                        {selectedFilters.manufacturer.map((filter) => (
                            <div key={`color-${filter}`} className='flex items-center'>
                                <button
                                    onClick={() => removeFilter('manufacturer', filter)}
                                    className='text-center text-red-600'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='18'
                                        height='18'
                                        fill='currentColor'
                                        className='bi bi-x'
                                        viewBox='0 0 16 16'>
                                        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
                                    </svg>
                                </button>
                                <span
                                    className='cursor-pointer rounded-full text-sm'
                                    onClick={() => removeFilter('manufacturer', filter)}>
                                    {filter}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className='mt-2 flex h-8 w-30 items-center rounded-full border border-red-600 text-red-700 hover:bg-red-700 hover:text-white'>
                        <button onClick={handleClearFilters} className='cursor-pointer'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18'
                                height='18'
                                fill='currentColor'
                                className='bi bi-x'
                                viewBox='0 0 16 16'>
                                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
                            </svg>
                        </button>
                        <button onClick={handleClearFilters} className='cursor-pointer text-[0.7em] font-extrabold'>
                            Clear all Filters
                        </button>
                    </div>
                </div>
            )}

            <div className='border-b border-gray-300 p-6'>
                <div
                    className='flex cursor-pointer items-center justify-between hover:text-red-700'
                    onClick={() => toggleFilter('brimType')}>
                    <h3 className='font-semibold'>Brim Type</h3>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className={`bi bi-chevron-up transition-transform ${
                            expandedFilters.brimType ? '' : 'rotate-180'
                        }`}
                        viewBox='0 0 16 16'>
                        <path d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z' />
                    </svg>
                </div>
                {expandedFilters.brimType && (
                    <div className='mt-3 space-y-2'>
                        {brimTypes.map((type) => (
                            <div key={type} className='flex items-center'>
                                <input
                                    type='checkbox'
                                    id={`brim-${type}`}
                                    checked={selectedFilters.brimType.includes(type)}
                                    onChange={(e) => handleFilterChange('brimType', type, e.target.checked)}
                                    className={`mr-2 h-4 w-4 cursor-pointer rounded-full border-2 border-gray-300 text-red-600 accent-red-600 transition-all duration-200 hover:rounded-full hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:outline-none focus:rounded-full focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none ${
                                        selectedFilters.brimType.includes(type)
                                            ? 'border-red-300 bg-red-100'
                                            : 'bg-white'
                                    } `}
                                />
                                <label htmlFor={`brim-${type}`} className='cursor-pointer text-gray-700'>
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='border-b border-gray-300 p-6'>
                <div
                    className='flex cursor-pointer items-center justify-between hover:text-red-700'
                    onClick={() => toggleFilter('color')}>
                    <h3 className='font-semibold'>Color</h3>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className={`bi bi-chevron-up transition-transform ${expandedFilters.color ? '' : 'rotate-180'}`}
                        viewBox='0 0 16 16'>
                        <path d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z' />
                    </svg>
                </div>
                {expandedFilters.color && (
                    <div className='mt-3 space-y-2'>
                        {colors.map((color) => (
                            <div key={color} className='flex items-center'>
                                <input
                                    type='checkbox'
                                    id={`color-${color}`}
                                    checked={selectedFilters.color.includes(color)}
                                    onChange={(e) => handleFilterChange('color', color, e.target.checked)}
                                    className={`mr-2 h-4 w-4 cursor-pointer rounded-full border-2 border-gray-300 text-red-600 accent-red-600 transition-all duration-200 hover:rounded-full hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:outline-none focus:rounded-full focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none ${
                                        selectedFilters.color.includes(color) ? 'border-red-300 bg-red-100' : 'bg-white'
                                    } `}
                                />
                                <label htmlFor={`color-${color}`} className='text-gray-700'>
                                    {color}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='border-b border-gray-300 p-6 hover:text-red-700'>
                <div
                    className='flex cursor-pointer items-center justify-between'
                    onClick={() => toggleFilter('manufacturer')}>
                    <h3 className='font-semibold'>Manufacturer</h3>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className={`bi bi-chevron-up transition-transform ${
                            expandedFilters.manufacturer ? '' : 'rotate-180'
                        }`}
                        viewBox='0 0 16 16'>
                        <path d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z' />
                    </svg>
                </div>
                {expandedFilters.manufacturer && (
                    <div className='mt-3 space-y-2'>
                        {manufacturers.map((brand) => (
                            <div key={brand} className='flex items-center'>
                                <input
                                    type='checkbox'
                                    id={`manufacturer-${brand}`}
                                    checked={selectedFilters.manufacturer.includes(brand)}
                                    onChange={(e) => handleFilterChange('manufacturer', brand, e.target.checked)}
                                    className={`mr-2 h-4 w-4 cursor-pointer rounded-full border-2 border-gray-300 text-red-600 accent-red-600 transition-all duration-200 hover:rounded-full hover:ring-2 hover:ring-gray-500 hover:ring-offset-2 hover:outline-none focus:rounded-full focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none ${
                                        selectedFilters.manufacturer.includes(brand)
                                            ? 'border-red-300 bg-red-100'
                                            : 'bg-white'
                                    } `}
                                />
                                <label htmlFor={`manufacturer-${brand}`} className='text-gray-700'>
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filters;
