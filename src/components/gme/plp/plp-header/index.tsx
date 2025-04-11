'use client';

import React from 'react';
import { INITIAL_ITEMS_PER_PAGE, INITIAL_SORT_OPTION, VARIANT_MOBILE, VIEW_GRID } from '@/helpers/constants';
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
    onViewChange?: (view: string) => void;
    onSortChange?: (option: string) => void;
    onMobileFilterToggle?: () => void;
    currentView?: string;
    sortOption?: string;
    quickShipEnabled?: boolean;
    onQuickShipToggle?: (enable: boolean) => void;
}

const PLPHeader = (props: Props) => {
    const totalCount = electricianProducts.length;
    const totalPages = Math.ceil(totalCount / props.itemsPerPage || INITIAL_ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        props.onPageChange?.(page, props.itemsPerPage);
    };

    const handleItemsPerPageChange = (itemsPerPage: number) => {
        props.onPageChange?.(1, itemsPerPage);
    };

    const handleViewChange = (view: string) => {
        props.onViewChange?.(view);
    };

    const handleQuickShipChange = (enable: boolean) => {
        props.onQuickShipToggle?.(enable);
    };

    const startItem = ((props.currentPage || 1) - 1) * (props.itemsPerPage || INITIAL_ITEMS_PER_PAGE) + 1;
    console.log(startItem);
    const lastItem = Math.min((props.currentPage || 1) * (props.itemsPerPage || INITIAL_ITEMS_PER_PAGE), totalCount);
    console.log(lastItem);

    const handleSortChange = (option: string) => {
        props.onSortChange?.(option);
    };

    return (
        <>
            <div className='border-my-border-grey flex flex-wrap items-center justify-between border-b p-5 md:w-full lg:w-auto xl:border-0'>
                <div className='text-secondary order-1 hidden w-full text-sm xl:order-1 xl:block xl:w-auto'>
                    <p>
                        showing {startItem}-{lastItem} of {totalCount}
                    </p>
                </div>

                <div className='text-secondary order-3 flex w-full items-center justify-between gap-1 text-sm md:w-auto md:justify-normal md:gap-5 lg:hidden xl:hidden'>
                    <QuickShipSwitch enabled={props.quickShipEnabled || false} onToggle={handleQuickShipChange} />
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
                    <ViewSelection currentView={props.currentView || VIEW_GRID} onViewChange={handleViewChange} />
                </div>

                <div className='order-7 mt-2 w-full md:order-5 md:mt-0 md:w-auto'>
                    <Sorting sortOption={props.sortOption || INITIAL_SORT_OPTION} onSortChange={handleSortChange} />
                </div>
            </div>
            <div className='pagination mt-2 flex justify-center gap-10 lg:gap-5 xl:hidden xl:gap-5'>
                <Pagination
                    currentPage={props.currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    variant={VARIANT_MOBILE}
                />
            </div>
        </>
    );
};

export default PLPHeader;
