'use client';

import React, { useState } from 'react';
import { useSort } from '../../../../hooks/useSort';
import EntriesPerPage from '../per-page-entry';
import { getSortIndicator } from '../sort-indicator';

const ShippingAddress = () => {
    const { sortConfig, requestSort } = useSort();
    const addresses = [
        { nickName: 'Nice ruban', address: '2071 BIRCHWOOD LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice misham', address: '2071 HOLLYWOOD LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice raza', address: '2071 KENNIS LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice vishanu', address: '2071 UDBERJ LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice rp', address: '2071 KOLTIS LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' }
    ];

    return (
        <div>
            <p className='text-primary pt-2 text-center text-2xl font-semibold uppercase md:mb-2 md:pt-0 md:text-left'>
                SHIPPING ADDRESS
            </p>
            <div className=''>
                <div className=''>
                    <div className='mb-4 justify-between md:flex'>
                        <div className='flex items-center justify-center pb-1'>
                            <span className='mr-2'>Show</span>
                            <EntriesPerPage />
                            <span className='ml-2'>entries</span>
                        </div>

                        <div className='xs:flex-row xs:items-center flex items-center gap-2'>
                            <input
                                type='text'
                                className='xs:w-auto w-full min-w-[150px] border px-2 py-1'
                                placeholder='Search...'
                            />
                            <button className='bg-primary cursor-pointer p-2 text-xs font-bold whitespace-nowrap text-white'>
                                ADD AN ADDRESS
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white'>
                                <thead>
                                    <tr className='border-t-3 border-red-600'>
                                        <th
                                            className='min-w-[120px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('Nickname')}>
                                            <div className='flex items-center justify-between'>
                                                Nickname
                                                {getSortIndicator('Nickname', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[120px] cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'
                                            onClick={() => requestSort('address')}>
                                            <div className='flex items-center justify-between'>
                                                Address
                                                {getSortIndicator('address', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'
                                            onClick={() => requestSort('city')}>
                                            <div className='flex items-center justify-between'>
                                                City, St Zip
                                                {getSortIndicator('city', sortConfig)}
                                            </div>
                                        </th>
                                        <th className='bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addresses.map((address, i) => (
                                        <tr
                                            key={i}
                                            className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
                                            <td className='text-primary px-4 py-2 whitespace-nowrap'>
                                                {address.nickName}
                                            </td>
                                            <td className='px-4 py-2 whitespace-nowrap'>{address.address}</td>
                                            <td className='px-4 py-2 whitespace-nowrap'>
                                                {address.city} {address.street} {address.zip}
                                            </td>
                                            <td className='flex justify-end gap-2 px-4 py-2 whitespace-nowrap'>
                                                <div>
                                                    <button className='bg-primary cursor-pointer p-2 text-xs font-bold whitespace-nowrap text-white'>
                                                        EDIT
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className='bg-primary cursor-pointer p-2 text-xs font-bold whitespace-nowrap text-white'>
                                                        X
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-between'>
                            <div>
                                Showing 1 to {addresses.length} of {addresses.length} entries
                            </div>
                            <div className='flex space-x-2'>
                                <button className='cursor-pointer border-none px-3 py-1'>Previous</button>
                                <button className='text-primary border-none px-3 py-1'>1</button>
                                <button className='cursor-pointer border-none px-3 py-1'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingAddress;
