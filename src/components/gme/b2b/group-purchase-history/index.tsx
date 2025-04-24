'use client';

import React, { useState } from 'react';
import { useSort } from '@/hooks/useSort';
import { getSortIndicator } from '../sort-indicator';

const GroupPurchaseHistory = () => {
    const { requestSort, sortConfig } = useSort();
    const [isRowsOpen, setIsRowsOpen] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    return (
        <div className='w-full max-w-full p-0'>
            <div className='overflow-auto'>
                <h3 className='text-primary text-3xl font-normal uppercase'>Group Purchase History</h3>
                <div>
                    <div className='-mr-3.5 -ml-3.5 flex flex-col md:flex-row'>
                        <div className='w-full max-w-full pr-4 pl-4 md:max-w-[50%] lg:max-w-[40%]'>
                            <div className='float-none mb-0.5 inline-flex w-full flex-wrap text-center'>
                                <button className='bg-secondary shrink-1 grow-1 basis-auto cursor-pointer text-white'>
                                    <span>Excel</span>
                                </button>
                                <button className='bg-secondary -ml-[1px] shrink-1 grow-1 basis-auto cursor-pointer text-white'>
                                    <span>CSV</span>
                                </button>
                                <button className='bg-secondary -ml-[1px] shrink-1 grow-1 basis-auto cursor-pointer text-white'>
                                    <span>PDF</span>
                                </button>
                                {/* Rows dropdown - now in the same line */}
                                <div className='relative -ml-px'>
                                    <button
                                        className='bg-secondary flex shrink-1 grow-1 basis-auto cursor-pointer items-center justify-center p-2 text-white'
                                        onClick={() => {
                                            console.log('isRowsOpen before toggle:', isRowsOpen);
                                            setIsRowsOpen(!isRowsOpen);
                                        }}>
                                        <span>Show {rowsPerPage} rows</span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='12'
                                            height='12'
                                            fill='currentColor'
                                            className='bi bi-caret-down-fill'
                                            viewBox='0 0 16 16'>
                                            <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                                        </svg>
                                    </button>

                                    {/* Dropdown menu */}
                                    {isRowsOpen && (
                                        <div className='border-my-border-grey absolute top-full right-0 z-10 mt-1 w-20 rounded-md border bg-white shadow-lg'>
                                            {[10, 25, 50, 100].map((num) => (
                                                <button
                                                    key={num}
                                                    className={`hover:text-secondary text-secondary block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${rowsPerPage === num ? 'bg-blue-500 text-white' : ''}`}
                                                    onClick={() => {
                                                        setRowsPerPage(num);
                                                        setIsRowsOpen(false);
                                                    }}>
                                                    {num}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-2 pl-4'>
                            <div className='pr-4 text-right'>
                                <label htmlFor='search' className='mb-0.5 inline-block font-normal'>
                                    Search:
                                    <input
                                        type='text'
                                        className='border-my-border-grey focus-visible:border-my-border-grey ml-1 inline-block h-9 w-auto border pl-1.5 focus:outline-none'
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white'>
                                <thead>
                                    <tr className='border-primary border-t-3'>
                                        <th
                                            className='min-w-[120px] cursor-pointer border-r border-white bg-black px-1 py-3 font-semibold text-white'
                                            onClick={() => requestSort('date')}>
                                            <div className='flex items-center justify-between'>
                                                Date
                                                {getSortIndicator('date', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                            onClick={() => requestSort('orderNo')}>
                                            <div className='flex items-center justify-between'>
                                                Order No.
                                                {getSortIndicator('orderNo', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                            onClick={() => requestSort('po#')}>
                                            <div className='flex items-center justify-between'>
                                                PO#
                                                {getSortIndicator('po#', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                            onClick={() => requestSort('orderBy')}>
                                            <div className='flex items-center justify-between'>
                                                Ordered By
                                                {getSortIndicator('orderBy', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                            onClick={() => requestSort('total')}>
                                            <div className='flex items-center justify-between'>
                                                Total
                                                {getSortIndicator('total', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                            onClick={() => requestSort('manager')}>
                                            <div className='flex items-center justify-between'>
                                                Manager
                                                {getSortIndicator('manager', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                            onClick={() => requestSort('grpLabel')}>
                                            <div className='flex items-center justify-between'>
                                                Group Label
                                                {getSortIndicator('grpLabel', sortConfig)}
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='w-full'>
                                    <tr>
                                        <td colSpan={7}>
                                            {' '}
                                            <p className='p-3 text-center'>No data available in the table.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        {' '}
                        <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-between'>
                            <div>
                                <p>Showing 0 to 0 of 0 entries</p>
                            </div>
                            <div className='flex space-x-2'>
                                <button className='hover:text-primary cursor-pointer border-none px-3 py-1'>
                                    Previous
                                </button>
                                <p className='text-primary border-none px-3 py-1'>1</p>
                                <button className='hover:text-primary cursor-pointer border-none px-3 py-1'>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPurchaseHistory;
