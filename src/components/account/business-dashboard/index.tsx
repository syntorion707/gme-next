'use client';

import Link from 'next/link';
import { useState } from 'react';
import EntriesSelector from './entry-selector';

const BusinessDashBoard = () => {
    // Sample data - replace with your actual data source
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: 'asc' | 'desc';
    } | null>(null);

    const orders = [
        {
            orderNumber: 4142780,
            name: 'DAN POBST',
            total: '$479.85',
            date: '06/15/2020'
        },
        {
            orderNumber: 4142785,
            name: 'KRISHNA',
            total: '$490.85',
            date: '09/15/2020'
        },
        {
            orderNumber: 4142784,
            name: 'DON BRADMAN',
            total: '$879.85',
            date: '10/15/2020'
        }
        // Add more orders as needed
    ];
    const recentOrders: any[] = [];
    const shipments: any[] = [];

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
                Business Dashboard
            </p>
            <div className='justify-between xl:flex'>
                <div className='xl:w-2/3'>
                    <div className='mb-6 rounded border border-[#bee5eb] bg-[#d1ecf1] p-4'>
                        <span className='text-[#0c5460]'>Sign up for paperless billing.</span>
                        <span className='text-blue-800'>
                            {' '}
                            Receive your invoices via email and save time and paper.
                            <span className='text-primary'> It's easy, start here.</span>
                        </span>
                    </div>

                    {/* Orders Awaiting Approval - Bordered Section */}
                    <div className='mb-6 border border-gray-300 p-4'>
                        <p className='mb-4 text-xl font-semibold'>Orders Awaiting Approval</p>

                        <div className='mb-4 justify-between md:flex'>
                            <div className='flex items-center justify-center pb-1'>
                                <span className='mr-2'>Show</span>
                                <EntriesSelector />
                                <span className='ml-2'>entries</span>
                            </div>
                            <div className='xs:flex-row xs:items-center flex items-center gap-2'>
                                <span className='whitespace-nowrap'>Search:</span>
                                <input
                                    type='text'
                                    className='xs:w-auto w-full min-w-[150px] border px-2 py-1'
                                    placeholder='Type to search...'
                                />
                            </div>
                        </div>

                        <div>
                            <div className='overflow-x-auto'>
                                <table className='min-w-full bg-white'>
                                    <thead>
                                        <tr className='border-t-3 border-red-600'>
                                            <th
                                                className='min-w-[120px] cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'
                                                onClick={() => requestSort('orderNumber')}>
                                                <div className='flex items-center justify-between'>
                                                    Order#
                                                    {getSortIndicator('orderNumber')}
                                                </div>
                                            </th>
                                            <th
                                                className='min-w-[120px] cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'
                                                onClick={() => requestSort('name')}>
                                                <div className='flex items-center justify-between'>
                                                    Name
                                                    {getSortIndicator('name')}
                                                </div>
                                            </th>
                                            <th
                                                className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'
                                                onClick={() => requestSort('total')}>
                                                <div className='flex items-center justify-between'>
                                                    Total
                                                    {getSortIndicator('total')}
                                                </div>
                                            </th>
                                            <th
                                                className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'
                                                onClick={() => requestSort('date')}>
                                                <div className='flex items-center justify-between'>
                                                    Date
                                                    {getSortIndicator('date')}
                                                </div>
                                            </th>
                                            <th className='min-w-[150px] bg-black px-4 py-3 font-medium text-white'>
                                                <div className='flex items-center justify-between'></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.orderNumber} className='hover:bg-gray-50'>
                                                <td className='text-primary px-4 py-2 whitespace-nowrap'>
                                                    {order.orderNumber}
                                                </td>
                                                <td className='px-4 py-2 whitespace-nowrap'>{order.name}</td>
                                                <td className='px-4 py-2 whitespace-nowrap'>{order.total}</td>
                                                <td className='px-4 py-2 whitespace-nowrap'>{order.date}</td>
                                                <td className='px-4 py-2 whitespace-nowrap'>
                                                    <button className='bg-primary cursor-pointer rounded-sm p-2 text-xs font-bold whitespace-nowrap text-white'>
                                                        Review and Approve
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-between'>
                                <div>
                                    Showing 1 to {orders.length} of {orders.length} entries
                                </div>
                                <div className='flex space-x-2'>
                                    <button className='border-none px-3 py-1'>Previous</button>
                                    <button className='text-primary border-none px-3 py-1'>1</button>
                                    <button className='border-none px-3 py-1'>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Most recent purchase - Bordered Section */}
                    <div className='mb-6 border border-gray-300 p-4'>
                        <p className='mb-4 text-xl font-semibold'>Most Recent Purchases</p>

                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white'>
                                <thead>
                                    <tr className='border-t-3 border-red-600'>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'>Order#/Name</div>
                                        </th>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'>Date/PO</div>
                                        </th>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'>Total</div>
                                        </th>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'>Status</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders?.length > 0 ? (
                                        recentOrders.map((order) => (
                                            <tr key={order.orderNumber} className='hover:bg-gray-50'>
                                                <td className='text-primary px-4 py-2'>{order.orderNumber}</td>
                                                <td className='px-4 py-2'>{order.name}</td>
                                                <td className='px-4 py-2'>{order.date}</td>
                                                <td className='px-4 py-2'>{order.total}</td>
                                                <td className='px-4 py-2'>{order.status}</td>
                                                <td className='px-4 py-2'>
                                                    <button className='bg-primary rounded-sm p-1 text-xs font-bold text-white'>
                                                        Review and Approve
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className='p-2'>
                                            <td className='col-span-4 p-2'>You have no recent orders</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {recentOrders?.length > 0 && (
                                <div className='mt-4 flex items-center justify-between text-sm'>
                                    <div>
                                        Showing 1 to {orders.length} of {orders.length} entries
                                    </div>
                                    <div className='flex space-x-2'>
                                        <button className='border-none px-3 py-1'>Previous</button>
                                        <button className='text-primary border-none px-3 py-1'>1</button>
                                        <button className='border-none px-3 py-1'>Next</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* User Info Section */}

                <div className='text-sm'>
                    {/* Sales Rep Info */}
                    <div className='mb-4 font-bold'>
                        <p className='hover:text-primary'>
                            Sales Rep: <span className=''>daniel.pobst@gmesupply.com</span>
                        </p>
                        <p className='hover:text-primary mt-1'>
                            Phone: <span className=''>718-210-3913</span>
                        </p>
                    </div>

                    {/* Welcome Box */}
                    <div className='flex justify-center border-t-3 border-red-600 bg-black p-3 text-white'>
                        <p className='font-medium'>Welcome GMEPRO TEST!</p>
                    </div>

                    {/* Quick Actions Section */}
                    <div className='mb-6 border border-gray-200 bg-[#ededef] p-4'>
                        <h3 className='mb-3 font-bold'>Quick Actions</h3>
                        <ul className='text-primary space-y-2 pl-1'>
                            <li>
                                <Link href='#' className='flex items-center'>
                                    <span className='mr-2 text-gray-500'>•</span> Manage Users
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex items-center'>
                                    <span className='mr-2 text-gray-500'>•</span> View My Gear List
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex items-center'>
                                    <span className='mr-2 text-gray-500'>•</span> FAQ (Frequently Asked Questions)
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='flex items-center'>
                                    <span className='mr-2 text-gray-500'>•</span> Alerts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Recent Shipments Section */}
                    <div className='mb-6 border border-gray-300 p-4'>
                        <p className='mb-4 text-xl font-semibold'>Most Recent Shipments</p>

                        <div className='overflow-x-auto'>
                            <table className='min-w-full bg-white'>
                                <thead>
                                    <tr className='border-t-3 border-red-600'>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'>Invoice#/Name</div>
                                        </th>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'>Date/PO</div>
                                        </th>
                                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-medium text-white'>
                                            <div className='flex items-center justify-between'></div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shipments?.length > 0 ? (
                                        shipments.map((order) => (
                                            <tr key={order.orderNumber} className='hover:bg-gray-50'>
                                                <td className='text-primary px-4 py-2'>{order.orderNumber}</td>
                                                <td className='px-4 py-2'>{order.name}</td>
                                                <td className='px-4 py-2'>{order.date}</td>
                                                <td className='px-4 py-2'>{order.total}</td>
                                                <td className='px-4 py-2'>{order.status}</td>
                                                <td className='px-4 py-2'>
                                                    <button className='bg-primary rounded-sm p-1 text-xs font-bold text-white'>
                                                        Review and Approve
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className='p-2'>
                                            <td className='col-span-4 p-2'>You have no shipments</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            {shipments?.length > 0 && (
                                <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-between'>
                                    <div>
                                        Showing 1 to {orders.length} of {orders.length} entries
                                    </div>
                                    <div className='flex space-x-2'>
                                        <button className='border-none px-3 py-1'>Previous</button>
                                        <button className='text-primary border-none px-3 py-1'>1</button>
                                        <button className='border-none px-3 py-1'>Next</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDashBoard;
