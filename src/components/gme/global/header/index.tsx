'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    { name: 'GME PRO', href: '/', icon: 'https://www.gmesupply.com/Content/Images/pro-logo.svg' },
    { name: 'Gearcor', href: '/', icon: 'https://www.gmesupply.com/Content/Images/gearcor-logo.svg' },
    { name: 'Quote', href: '/', icon: 'https://www.gmesupply.com/Content/Images/quote.svg' },
    { name: 'Sign in', href: '/b2b', icon: 'https://www.gmesupply.com/Content/Images/signin.svg' },
    { name: 'Cart', href: '/cart', icon: 'https://www.gmesupply.com/Content/Images/cart.svg' }
];

const categoryLinks = [
    { name: 'Featured Brands' },
    { name: 'Fall Protection' },
    { name: 'PPE & Work Wear' },
    { name: 'Lifting & Rigging' },
    { name: 'Rope' },
    { name: 'Rescue' },
    { name: 'First Aid' },
    { name: 'Tools' },
    { name: 'Bags, Buckets, & Storage' },
    { name: 'Devices & Testing' }
];

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <>
            <nav className='flex items-center justify-between bg-black px-4 py-3 text-white md:px-6'>
                <div className='flex min-w-[160px] items-center gap-4'>
                    <Link href='/'>
                        <img
                            src='https://www.gmesupply.com/images/logos/gme-web-white-alt.png'
                            alt='GME Supply Logo'
                            width='120'
                            height='40'
                            className='w-28 cursor-pointer md:w-40'
                        />
                    </Link>
                    <button onClick={toggleSidebar} className='text-2xl text-white'>
                        &#9776;
                    </button>
                </div>

                <div className='mx-6 hidden flex-1 items-center justify-center md:flex'>
                    <div className='flex w-full max-w-[600px] items-center border bg-white'>
                        <input
                            type='search'
                            placeholder='Search for products'
                            className='w-full px-6 py-2 text-gray-700 outline-none'
                        />
                        <button className='flex items-center bg-[#ce181e] px-4 py-2 text-white'>
                            <svg className='h-8 w-8' viewBox='0 0 24 24' fill='white'>
                                <path d='M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z'></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 md:hidden'>
                    {navLinks
                        .filter((link) => link.name === 'Sign in' || link.name === 'Cart')
                        .map((link) => (
                            <Link key={link.name} href={link.href}>
                                <Image src={link.icon} alt={link.name} width={30} height={30} />
                            </Link>
                        ))}
                </div>

                <div className='hidden min-w-[180px] items-center justify-end gap-6 md:flex'>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className='flex flex-col items-center'>
                            {link.icon && <Image src={link.icon} alt={link.name} width={30} height={30} />}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            <div className='px-4 md:hidden'>
                <div className='relative w-full'>
                    <input
                        type='search'
                        placeholder='Search for products'
                        className='w-full border bg-white px-6 py-4 text-gray-700'
                    />
                    <button className='absolute top-0 right-0 bottom-0 bg-red-600 px-4 text-white'>
                        {' '}
                        <svg className='h-6 w-6' viewBox='0 0 24 24' fill='white'>
                            <path d='M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z'></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white p-5 shadow-lg ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}>
                <button onClick={toggleSidebar} className='mb-4 text-xl text-black'>
                    ✖
                </button>

                <ul className='flex flex-col gap-4 text-lg text-black'>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <li>{link.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='hidden cursor-pointer justify-around gap-4 border-t-2 border-red-600 bg-black px-6 py-2 text-white md:flex'>
                {categoryLinks.map((category, index) => (
                    <Link href={'/category'} key={index}>
                        <p className='text-sm lg:text-lg'>{category?.name}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}
