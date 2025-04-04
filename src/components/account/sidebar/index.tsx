'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Props {
    slug?: string;
}

const Sidebar = ({ slug }: Props) => {
    return (
        <div className='flex w-72 flex-col space-y-6 font-sans'>
            {/* Your Pro Account Menu */}
            <div>
                <input type='checkbox' id='pro-menu-toggle' className='peer/pro-menu hidden' defaultChecked />
                <label
                    htmlFor='pro-menu-toggle'
                    className='relative block cursor-pointer border-t-3 border-red-600 bg-black p-3 text-white'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold'>Your Pro Account Menu</h3>
                    </div>
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 transform text-white md:hidden'>
                        <span className='peer-checked/pro-menu:hidden'>+</span>
                        <span className='hidden peer-checked/pro-menu:inline'>−</span>
                    </div>
                </label>

                <div className='top-full right-0 left-0 z-10 hidden border border-gray-200 bg-[#ededef] p-4 shadow-md peer-checked/pro-menu:block'>
                    <div className='mb-4'>
                        <p className='text-2xl font-bold'>DAN POBST (203121)</p>
                        <img
                            src='https://gmeplay.gearcor.com/logo/gmeplay.jpg'
                            alt='user profile'
                            className='h-16 w-16 rounded-full border-2 border-gray-200 object-contain'
                        />
                    </div>
                    <ul className='space-y-3 text-sm font-normal text-black'>
                        <li>
                            <Link href='/b2b' className='hover:text-primary flex items-center gap-2 font-semibold'>
                                My Dashboard{' '}
                                <span className='bg-primary rounded-full px-2 font-semibold text-white'>3</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/b2b/addresses' className='hover:text-primary flex items-center'>
                                Address
                            </Link>
                        </li>
                        <li>
                            <Link href='/b2b/orderHistory' className='hover:text-primary flex items-center'>
                                Order History
                            </Link>
                        </li>
                        <li>
                            <Link href='/b2b/groupPurchaseHistory' className='hover:text-primary flex items-center'>
                                Group Purchase History
                            </Link>
                        </li>
                        <li>
                            <Link href='/b2b/view' className='hover:text-primary flex items-center'>
                                View & Pay Invoice
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Recent Payments
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Gear List
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Marketplace
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Recalibration Tracking
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                My Reports
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                My Saved Carts
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Quotes for my Gear Effort
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ADMIN Menu */}
            <div>
                <input type='checkbox' id='admin-menu-toggle' className='peer/admin-menu hidden' defaultChecked />
                <label
                    htmlFor='admin-menu-toggle'
                    className='relative block cursor-pointer border-t-3 border-red-600 bg-black p-3 text-white'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold'>ADMIN</h3>
                    </div>
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 transform text-white md:hidden'>
                        <span className='peer-checked/admin-menu:hidden'>+</span>
                        <span className='hidden peer-checked/admin-menu:inline'>−</span>
                    </div>
                </label>

                <div className='hidden border border-gray-200 bg-[#ededef] p-4 peer-checked/admin-menu:block'>
                    <ul className='space-y-3 text-sm font-normal'>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Manage User
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Alerts
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Manage Permissions
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                My Payment Methods
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Manage Files
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Shipping Accounts
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Groups
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-primary flex items-center'>
                                Tax Exempt Documents
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
