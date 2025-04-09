'use client';

import React from 'react';
import { MAX_VISIBLE_PAGES, PaginationVariant, VARIANT_DEFAULT, VARIANT_MOBILE } from '@/helpers/constants';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    variant?: PaginationVariant;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    className = '',
    variant = VARIANT_DEFAULT
}) => {
    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= MAX_VISIBLE_PAGES) {
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

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    return (
        <div className={`flex items-center gap-5 ${className}`}>
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

            <div className={`flex ${variant === VARIANT_MOBILE ? 'gap-4 p-2' : 'gap-5'}`}>
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => (typeof page === 'number' ? handlePageChange(page) : null)}
                        disabled={page === '...'}
                        className={` ${variant === VARIANT_DEFAULT ? 'h-6 w-5 rounded text-xs font-bold' : 'h-5 w-5 text-xs font-bold'} ${page === currentPage ? 'text-red-500' : variant === 'default' ? 'text-black hover:bg-gray-300' : 'text-gray-700'} ${page === '...' ? 'cursor-default' : 'cursor-pointer'} `}>
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
    );
};

export default Pagination;
