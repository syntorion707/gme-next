'use client';

import React, { useState } from 'react';

const BillingAddress = () => {
    const addresses = [
        { nickName: 'Nice ruban', address: '2071 BIRCHWOOD LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice misham', address: '2071 HOLLYWOOD LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice raza', address: '2071 KENNIS LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice vishanu', address: '2071 UDBERJ LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' },
        { nickName: 'Nice rp', address: '2071 KOLTIS LN', city: 'OSAGE', street: 'BEACH MO', zip: '65065-4905' }
    ];

    // Sample data - replace with your actual data source
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: 'asc' | 'desc';
    } | null>(null);

    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key: string) => {
        if (!sortConfig || sortConfig.key !== key) {
            return (
                <span className='ml-1 flex'>
                    <span className='text-gray-400'>↑</span>
                    <span className='text-gray-400'>↓</span>
                </span>
            );
        }

        return (
            <span className='ml-1 flex'>
                <span className={sortConfig.direction === 'asc' ? 'text-white' : 'text-gray-400'}>↑</span>
                <span className={sortConfig.direction === 'desc' ? 'text-white' : 'text-gray-400'}>↓</span>
            </span>
        );
    };

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
                                                {getSortIndicator('Nickname')}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[120px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('address')}>
                                            <div className='flex items-center justify-between'>
                                                Address
                                                {getSortIndicator('address')}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('city')}>
                                            <div className='flex items-center justify-between'>
                                                City,St Zip
                                                {getSortIndicator('city')}
                                            </div>
                                        </th>
                                        <th
                                            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-1 py-3 font-medium text-white'
                                            onClick={() => requestSort('')}>
                                            <div className='flex items-center justify-end'>{getSortIndicator('')}</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addresses.map((address, i) => (
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
