'use client';

import React, { useState } from 'react';
import Filters from './filters';
import MobileFilterMenu from './filters/mobile-filter-menu';
import ProductCardNew from './product-card';

const ProductListing = () => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const [selectedFilters, setSelectedFilters] = useState({
        brimType: [],
        color: [],
        manufacturer: []
    });

    const handleFilterChange = (filterType: keyof typeof selectedFilters, value: string, isChecked: boolean) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filterType]: isChecked ? [...prev[filterType], value] : prev[filterType].filter((item) => item !== value)
        }));
    };
    const handleClearFilters = () => {
        setSelectedFilters({
            brimType: [],
            color: [],
            manufacturer: []
        });
    };

    return (
        <div className='w-full font-sans'>
            <h1 className='text-primary p-3 text-end text-4xl lg:pr-20'>ANCHORAGE</h1>
            <div className='w-full lg:flex lg:gap-2 lg:p-8 xl:p-10'>
                <Filters
                    selectedFilters={selectedFilters}
                    handleFilterChange={handleFilterChange}
                    handleClearFilters={handleClearFilters}
                />
                {isMobileFilterOpen && (
                    <>
                        <div
                            className='bg-opacity-50 fixed inset-0 z-40 lg:hidden'
                            onClick={() => setIsMobileFilterOpen(false)}
                        />
                        <div className='fixed inset-x-0 inset-y-0 left-0 z-50 h-full w-96 transform overflow-y-auto bg-white transition-transform duration-300 lg:hidden'>
                            <div className='flex h-full flex-col p-4'>
                                <div className='mb-4 flex items-center justify-end pb-4'>
                                    <button
                                        onClick={() => setIsMobileFilterOpen(false)}
                                        className='border-my-border-grey text-secondary flex h-8 w-10 items-center justify-center rounded-md border p-1 hover:text-gray-700'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'>
                                            <line x1='18' y1='6' x2='6' y2='18'></line>
                                            <line x1='6' y1='6' x2='18' y2='18'></line>
                                        </svg>
                                    </button>
                                </div>

                                <div className='flex-grow overflow-y-auto'>
                                    <MobileFilterMenu
                                        selectedFilters={selectedFilters}
                                        handleFilterChange={handleFilterChange}
                                        handleClearFilters={handleClearFilters}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <ProductCardNew onMobileFilterToggle={() => setIsMobileFilterOpen(!isMobileFilterOpen)} />
            </div>
        </div>
    );
};

export default ProductListing;
