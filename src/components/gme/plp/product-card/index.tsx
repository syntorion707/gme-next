'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { INITIAL_ITEMS_PER_PAGE, INITIAL_SORT_OPTION, VIEW_GRID, ViewType } from '@/helpers/constants';
import { electricianProducts } from '../dummy-data/data';
import PLPHeader from '../plp-header';
import Gridview from './grid-view';
import ListView from './list-view';

type Props = {
    onMobileFilterToggle?: () => void;
};

const ProductCardNew = ({ onMobileFilterToggle }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(INITIAL_ITEMS_PER_PAGE);
    const [currentView, setCurrentView] = useState<ViewType>(VIEW_GRID);
    const [sortOption, setSortOption] = useState(INITIAL_SORT_OPTION);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (page: number, newItemsPerPage: number) => {
        setCurrentPage(page);
        if (newItemsPerPage) {
            setItemsPerPage(newItemsPerPage);
        }
    };

    const handleSortChange = (option: string) => {
        setSortOption(option);
        setCurrentPage(1);
    };

    const handleViewChange = (view: ViewType) => {
        setCurrentView(view);
    };

    const sortedProducts = [...electricianProducts].sort((a, b) => {
        if (sortOption === 'price-low-high') {
            return a.price - b.price;
        } else if (sortOption === 'price-high-low') {
            return b.price - a.price;
        }

        return 0;
    });

    const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

    return (
        <div className='w-full'>
            <PLPHeader
                currentPage={currentPage}
                currentView={currentView}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                onViewChange={handleViewChange}
                onSortChange={handleSortChange}
                onMobileFilterToggle={onMobileFilterToggle}
                sortOption={sortOption}
            />
            {currentView === 'grid' ? (
                <div className='mt-2 grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-6 lg:min-w-3/4 lg:grid-cols-2 xl:grid-cols-4 xl:gap-4'>
                    {paginatedProducts.map((product) => (
                        <Link href='/pdp' key={product.id}>
                            <Gridview key={product.id} product={product} />
                        </Link>
                    ))}
                </div>
            ) : (
                <div className='grid w-full grid-cols-1 gap-4 p-2'>
                    {paginatedProducts.map((product) => (
                        <Link href='/pdp' key={product.id}>
                            <ListView key={product.id} product={product} />
                        </Link>
                    ))}
                </div>
            )}
            <PLPHeader
                currentPage={currentPage}
                currentView={currentView}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                onViewChange={handleViewChange}
                onSortChange={handleSortChange}
                onMobileFilterToggle={onMobileFilterToggle}
                sortOption={sortOption}
            />
        </div>
    );
};

export default ProductCardNew;
