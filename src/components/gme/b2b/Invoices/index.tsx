'use client';

import React, { useState } from 'react';
import { useSort } from '@/hooks/useSort';
import { getSortIndicator } from '../sort-indicator';

const Invoices = () => {
    const { requestSort, sortConfig } = useSort();
    const [isRowsOpen, setIsRowsOpen] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
return (
        <div className='w-full max-w-full p-0'>
            <div className='overflow-auto'>
                <h3 className='text-primary text-3xl font-normal uppercase'>View & Pay Invoices</h3>
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
                        <div className='w-full'>
                            <div className='flex w-full max-w-full justify-end p-2 pl-4 md:p-0'>
                                <div className='pl-auto h-11 text-right'>
                                    <label htmlFor='search' className='mb-0.5 inline-block font-normal md:pr-2'>
                                        <input
                                            type='text'
                                            placeholder='Search'
                                            className='border-my-border-grey focus-visible:border-my-border-grey ml-1 h-12 w-45 border pl-1.5 focus:outline-none md:inline-block md:w-auto'
                                        />
                                    </label>
                                </div>
                                <div className='flex flex-col items-end gap-1 lg:flex-row'>
                                    <button className='bg-primary h-10 w-32 rounded font-bold text-white'>
                                        Pay Invoices
                                    </button>
                                    <button className='bg-primary h-10 w-38 rounded font-bold text-white'>
                                        Pay All Invoices
                                    </button>
                                </div>
                            </div>
                            <div className='flex w-full flex-col items-end gap-2 md:justify-end md:p-2 lg:flex-row'>
                                <button className='bg-secondary flex h-8 w-45 items-center justify-center gap-1 text-white md:w-auto md:px-4'>
                                    <span>Email Statements</span>
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

                                <button className='bg-secondary flex h-8 w-50 items-center justify-center gap-1 text-white md:w-auto md:px-4'>
                                    <span>Download Statements</span>
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
                            </div>
                        </div>
                    </div>

                    <div className='overflow-x-auto'>
                        <table className='min-w-full bg-white'>
                            <thead>
                                <tr className='border-primary border-t-3'>
                                    <th
                                        className='min-w-[120px] cursor-pointer border-r border-white bg-black px-1 py-3 font-semibold text-white'
                                        onClick={() => requestSort('dueDate')}>
                                        <div className='flex items-center justify-between'>
                                            Due Date
                                            {getSortIndicator('dueDate', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('invData')}>
                                        <div className='flex items-center justify-between'>
                                            Inv Date
                                            {getSortIndicator('invData', sortConfig)}
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
                                        onClick={() => requestSort('address')}>
                                        <div className='flex items-center justify-between'>
                                            Address
                                            {getSortIndicator('address', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('order')}>
                                        <div className='flex items-center justify-between'>
                                            Order
                                            {getSortIndicator('order', sortConfig)}
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
                                        onClick={() => requestSort('balance')}>
                                        <div className='flex items-center justify-between'>
                                            Balance
                                            {getSortIndicator('balance', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('pastDue')}>
                                        <div className='flex items-center justify-between'>
                                            Days Past Due
                                            {getSortIndicator('pastDue', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('pay')}>
                                        <div className='flex items-center justify-between'>
                                            Pay
                                            {getSortIndicator('pay', sortConfig)}
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

export default Invoices;
