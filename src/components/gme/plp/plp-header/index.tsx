'use client';

import React, { useState } from 'react';
import { electricianProducts } from '../dummy-data/data';

type Props = {
    itemsPerPage?: number;
    onPageChange?: (page: number, itemsPerPage: number) => void;
    onViewChange?: (view: 'grid' | 'list') => void;
    onSortChange?: (option: string) => void;
    onMobileFilterToggle?: () => void;
};

const PLPHeader = (props: Props) => {
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const totalCount = electricianProducts.length;
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
    const [sortOption, setSortOption] = useState('relevance');

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        props.onPageChange?.(page, itemsPerPage);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newItemsPerPage = Number(e.target.value);
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
        props.onPageChange?.(1, newItemsPerPage);
    };

    const handleViewChange = (view: 'grid' | 'list') => {
        setCurrentView(view);
        props.onViewChange?.(view);
    };

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    console.log(startItem);
    const lastItem = Math.min(currentPage * itemsPerPage, totalCount);
    console.log(lastItem);

    const getPageNumber = () => {
        const pages = [];
        const maxVisiblePages = 5;
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const leftBound = Math.max(1, currentPage - 2);
            const rightBound = Math.min(totalPages, currentPage + 2);

            if (leftBound > 1) pages.push(1);
            if (leftBound > 2) pages.push('...');

            for (let i = leftBound; i <= rightBound; i++) {
                pages.push(i);
            }

            if (rightBound < totalPages - 1) pages.push('...');
            if (rightBound < totalPages) pages.push(totalPages);
        }

        return pages;
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const option = e.target.value;
        setSortOption(option);
        props.onSortChange?.(option);
    };

    return (
        <>
            <div className='grid w-auto grid-cols-2 gap-x-6 gap-y-4 border-b border-slate-300 p-5 md:grid-cols-4 md:items-center md:justify-items-stretch lg:grid-cols-3 xl:grid-cols-5 xl:border-0'>
                <div className='show hidden text-sm text-gray-500 xl:block'>
                    <p>
                        showing {startItem}-{lastItem} of {totalCount}
                    </p>
                </div>
                <div className='show flex items-center gap-1 text-sm text-gray-500 lg:hidden xl:hidden'>
                    <div>
                        <label className='relative inline-block h-6 w-10'>
                            <input type='checkbox' className='peer hidden' />
                            <span className='absolute inset-0 cursor-pointer rounded-full bg-gray-500 transition duration-300 peer-checked:bg-green-500'></span>
                            <span className='absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-4'></span>
                        </label>
                    </div>
                    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='42' height='32' viewBox='0 0 42 32'>
                        <path
                            fill='#008200'
                            d='M11.281 8.008c-0.039 0.016-0.078 0.039-0.109 0.070 0.016-0.023 0.031-0.031 0.054-0.047 0.016-0.008 0.039-0.023 0.054-0.023z'></path>
                        <path fill='#008200' d='M25.906 16.246v0.015l-13.976-7.077 13.976 7.061z'></path>
                        <path
                            fill='#008200'
                            d='M41.724 8.209c-0.016-0.039-0.023-0.070-0.047-0.101-0.016-0.039-0.039-0.070-0.070-0.093-0.023-0.031-0.054-0.054-0.093-0.077-0.016-0.015-0.031-0.023-0.046-0.031l-14.905-6.651c-0.124-0.054-0.263-0.054-0.379 0l-14.905 6.752c-0.039 0.015-0.077 0.039-0.108 0.070-0.023 0.015-0.046 0.039-0.062 0.062-0.023 0.015-0.039 0.039-0.046 0.062-0.039 0.062-0.062 0.139-0.062 0.217v4.994c0 0.255 0.209 0.465 0.465 0.465s0.465-0.209 0.465-0.465v-4.227l13.975 7.061v13.867l-7.611-3.895c-0.225-0.116-0.503-0.023-0.619 0.201-0.116 0.232-0.031 0.511 0.201 0.627l8.254 4.228c0.077 0.039 0.155 0.062 0.24 0.062 0.077 0 0.147-0.015 0.217-0.047l0.031-0.015 14.874-7.634c0.155-0.077 0.248-0.24 0.248-0.41v-14.912c0 0-0.008-0.070-0.015-0.108zM26.371 2.193l13.821 6.171-4.979 2.547-13.279-6.713 4.437-2.005zM26.371 15.441h-0.015l-13.813-6.992 5.002-2.261 13.542 6.837-4.715 2.416zM40.811 22.943l-13.976 7.17v-13.867l4.684-2.393 0.054 5.513c0.008 0.163 0.085 0.31 0.224 0.395 0.077 0.046 0.163 0.062 0.24 0.062s0.147-0.015 0.217-0.046l3.105-1.595c0.155-0.077 0.255-0.24 0.255-0.41v-6.024l5.195-2.656v13.852z'></path>
                        <path fill='#008200' d='M12.542 8.449v0zM12.542 8.449v0z'></path>
                        <path
                            fill='#008200'
                            d='M15.345 16.695h-14.2c-0.256 0-0.465-0.209-0.465-0.465s0.209-0.465 0.465-0.465h14.2c0.255 0 0.464 0.209 0.464 0.465s-0.209 0.465-0.464 0.465z'></path>
                        <path
                            fill='#008200'
                            d='M15.345 20.737h-10.453c-0.255 0-0.465-0.209-0.465-0.465s0.209-0.465 0.465-0.465h10.453c0.255 0 0.465 0.209 0.465 0.465s-0.209 0.465-0.465 0.465z'></path>
                        <path
                            fill='#008200'
                            d='M15.345 24.786h-6.55c-0.255 0-0.465-0.209-0.465-0.465s0.209-0.465 0.465-0.465h6.55c0.255 0 0.464 0.209 0.464 0.465s-0.209 0.465-0.464 0.465z'></path>
                    </svg>
                    <h2>QUICKSHIP</h2>
                </div>
                <div className='flex w-full items-end justify-end md:justify-start lg:hidden'>
                    <button
                        onClick={() => props.onMobileFilterToggle?.()}
                        className='h-8 w-20 rounded-2xl border font-bold md:h-8 md:w-25'>
                        Filter
                    </button>
                </div>
                <div className='items-per-page hidden w-full lg:contents xl:block'>
                    <select
                        name='page'
                        id='page'
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className='cursor-pointer rounded border border-gray-300 p-2 text-center'>
                        <option value='4'>4 items per page</option>
                        <option value='5'>5 items per page</option>
                    </select>
                </div>
                <div className='pagination hidden w-full justify-center gap-10 xl:flex xl:gap-5'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`text-[0.5em] disabled:opacity-50 ${
                            currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='10'
                            height='16'
                            fill='currentColor'
                            className='bi bi-chevron-left'
                            viewBox='0 0 16 16'>
                            <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0' />
                        </svg>
                    </button>
                    <div className='flex gap-5'>
                        {getPageNumber().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => (typeof page === 'number' ? handlePageChange(page) : null)}
                                disabled={page === '...'}
                                className={`h-6 w-5 rounded text-xs font-bold ${
                                    page === currentPage ? 'text-red-500' : 'text-black hover:bg-gray-300'
                                } ${page === '...' ? 'cursor-default' : 'cursor-pointer'}`}>
                                {page}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`disabled:opacity-50 ${
                            currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='10'
                            height='16'
                            fill='currentColor'
                            className='bi bi-chevron-right'
                            viewBox='0 0 16 16'>
                            <path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708' />
                        </svg>
                    </button>
                </div>
                <div className='view-toggle hidden w-full gap-2 md:flex'>
                    <button
                        onClick={() => handleViewChange('grid')}
                        className={`flex h-7 w-16 cursor-pointer items-center gap-1 border p-1 font-bold text-gray-500 ${
                            currentView === 'grid'
                                ? 'rounded border-2 border-black bg-red-700 text-white'
                                : 'border border-gray-400'
                        }`}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-grid-fill'
                            viewBox='0 0 16 16'>
                            <path d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z' />
                        </svg>
                        <span className='text-sm'>Grid</span>
                    </button>
                    <button
                        onClick={() => handleViewChange('list')}
                        className={`flex h-7 w-16 cursor-pointer items-center gap-1 p-1 text-gray-500 ${
                            currentView === 'list'
                                ? 'rounded border-2 border-black bg-red-700 text-white'
                                : 'border border-gray-500'
                        }`}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-list-ul'
                            viewBox='0 0 16 16'>
                            <path d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                        </svg>
                        <span className='text-sm font-bold'>List</span>
                    </button>
                </div>
                <div className='sort mt-2 w-full md:mt-auto'>
                    <select
                        name='sort'
                        id=''
                        className='w-30 cursor-pointer rounded border border-gray-300 p-2 text-start md:w-auto'
                        value={sortOption}
                        onChange={handleSortChange}>
                        <option value='relevance'>Relevance</option>
                        <option value='price-low-high'>Price (low to high)</option>
                        <option value='price-high-low'>Price (high to low)</option>
                    </select>
                </div>
            </div>
            <div className='pagination mt-2 flex justify-center gap-10 lg:gap-5 xl:hidden xl:gap-5'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`text-[0.5em] disabled:opacity-50 ${
                        currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        height='16'
                        fill='currentColor'
                        className='bi bi-chevron-left'
                        viewBox='0 0 16 16'>
                        <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0' />
                    </svg>
                </button>
                {getPageNumber().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => (typeof page === 'number' ? handlePageChange(page) : null)}
                        disabled={page === '...'}
                        className={`${
                            page === currentPage ? 'text-red-500' : 'text-gray-700'
                        } ${page === '...' ? 'cursor-default' : 'cursor-pointer'}`}>
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`disabled:opacity-50 ${
                        currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        height='16'
                        fill='currentColor'
                        className='bi bi-chevron-right'
                        viewBox='0 0 16 16'>
                        <path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708' />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default PLPHeader;
