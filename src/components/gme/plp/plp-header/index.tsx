'use client';

import React from 'react';
import { electricianProducts } from '../dummy-data/data';
import ItemsPerPage from './items-per-page';
import Pagination from './pagination';
import QuickShipSwitch from './quick-ship-switch';
import Sorting from './sorting';
import ViewSelection from './view-selection';

interface Props {
    currentPage: number;
    itemsPerPage: number;
    onPageChange?: (page: number, itemsPerPage: number) => void;
    onViewChange?: (view: 'grid' | 'list') => void;
    onSortChange?: (option: string) => void;
    onMobileFilterToggle?: () => void;
    currentView?: 'grid' | 'list';
    sortOption?: string;
}

const PLPHeader = (props: Props) => {
    const totalCount = electricianProducts.length;
    const totalPages = Math.ceil(totalCount / props.itemsPerPage || 5);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        props.onPageChange?.(page, props.itemsPerPage);
    };

    const handleItemsPerPageChange = (itemsPerPage: number) => {
        props.onPageChange?.(1, itemsPerPage);
    };

    const handleViewChange = (view: 'grid' | 'list') => {
        props.onViewChange?.(view);
    };

    const startItem = ((props.currentPage || 1) - 1) * (props.itemsPerPage || 5) + 1;
    console.log(startItem);
    const lastItem = Math.min((props.currentPage || 1) * (props.itemsPerPage || 5), totalCount);
    console.log(lastItem);

    const handleSortChange = (option: string) => {
        props.onSortChange?.(option);
    };

    return (
        <>
            <div className='flex flex-wrap items-center justify-between border-b border-slate-300 p-5 md:w-full lg:w-auto xl:border-0'>
                <div className='order-1 hidden w-full text-sm text-gray-500 xl:order-1 xl:block xl:w-auto'>
                    <p>
                        showing {startItem}-{lastItem} of {totalCount}
                    </p>
                </div>

                <div className='order-3 flex w-full items-center justify-between gap-1 text-sm text-gray-500 md:w-auto md:justify-normal md:gap-5 lg:hidden xl:hidden'>
                    <QuickShipSwitch />
                    <div className='order-2 flex lg:hidden'>
                        <button
                            onClick={() => props.onMobileFilterToggle?.()}
                            className='h-8 w-20 rounded-2xl border font-bold'>
                            Filter
                        </button>
                    </div>
                </div>
                <div className='order-4 hidden w-full lg:order-2 lg:flex lg:w-auto xl:block'>
                    <ItemsPerPage itemsPerPage={props.itemsPerPage} onItemsPerPageChange={handleItemsPerPageChange} />
                </div>

                <div className='order-5 hidden w-full items-center justify-center gap-5 xl:order-3 xl:flex xl:w-auto'>
                    <Pagination
                        currentPage={props.currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
                <div className='order-6 hidden w-full gap-2 md:order-4 md:flex md:w-auto'>
                    <ViewSelection currentView={props.currentView || 'grid'} onViewChange={handleViewChange} />
                </div>

                <div className='order-7 mt-2 w-full md:order-5 md:mt-0 md:w-auto'>
                    <Sorting sortOption={props.sortOption || 'relavance'} onSortChange={handleSortChange} />
                </div>
            </div>
            <div className='pagination mt-2 flex justify-center gap-10 lg:gap-5 xl:hidden xl:gap-5'>
                <Pagination
                    currentPage={props.currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    variant='mobile'
                />
            </div>
        </>
    );
};

export default PLPHeader;
