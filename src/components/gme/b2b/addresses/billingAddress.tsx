'use client';

import React, { useState } from 'react';
import { useSort } from '../../../../hooks/useSort';
import { getSortIndicator } from '../sortIndicator';

const BillingAddress = () => {
    const { sortConfig, requestSort } = useSort();

    const addresses = [
        { nickName: 'Nice ruban', address: '2071 BIRCHWOOD LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice misham', address: '2071 HOLLYWOOD LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice raza', address: '2071 KENNIS LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice vishanu', address: '2071 UDBERJ LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice rp', address: '2071 KOLTIS LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' }
    ];

    // Sorted addresses based on sortConfig
    const sortedAddresses = [...addresses].sort((a, b) => {
        if (!sortConfig) return 0;

        const aValue = a[sortConfig.key as keyof typeof a]?.toLowerCase?.() ?? '';
        const bValue = b[sortConfig.key as keyof typeof b]?.toLowerCase?.() ?? '';

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;

        return 0;
    });

    return (
        <div>
            <p className='text-primary pt-2 text-center text-2xl font-semibold uppercase md:mb-2 md:pt-0 md:text-left'>
                BILLING ADDRESS
            </p>
            <div className=''>
                <div className=''>
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
                                            className='min-w-[120px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('address')}>
                                            <div className='flex items-center justify-between'>
                                                Address
                                                {getSortIndicator('address', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('city')}>
                                            <div className='flex items-center justify-between'>
                                                City,St Zip
                                                {getSortIndicator('city', sortConfig)}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('')}>
                                            <div className='flex items-center justify-end'>
                                                {getSortIndicator('', sortConfig)}
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedAddresses.map((address, i) => (
                                        <tr
                                            key={i}
                                            className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
                                            <td className='px-4 py-2 whitespace-nowrap'>{address.nickName}</td>
                                            <td className='px-4 py-2 whitespace-nowrap'>{address.address}</td>
                                            <td className='px-4 py-2 whitespace-nowrap'>
                                                {' '}
                                                {address?.city} {address?.street} {address.zip}
                                            </td>
                                            <td className='flex justify-end px-4 py-2 whitespace-nowrap'>
                                                <button className='bg-primary cursor-pointer p-2 text-xs font-bold whitespace-nowrap text-white'>
                                                    UPDATE
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-10'>
                <span className='font-semibold'>Sign up for paperless billing. </span>
                <span>Receive your invoices via email and save time and paper.</span>{' '}
                <span className='text-primary cursor-pointer'>It's easy, start here.</span>
            </div>
        </div>
    );
};

export default BillingAddress;
