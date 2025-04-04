'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    { name: 'GME PRO', href: '#', icon: 'https://www.gmesupply.com/Content/Images/pro-logo.svg' },
    { name: 'Gearcor', href: '#', icon: 'https://www.gmesupply.com/Content/Images/gearcor-logo.svg' },
    { name: 'Quote', href: '#', icon: 'https://www.gmesupply.com/Content/Images/quote.svg' },
    { name: 'Sign in', href: '#', icon: 'https://www.gmesupply.com/Content/Images/signin.svg' },
    { name: 'Cart', href: '#', icon: 'https://www.gmesupply.com/Content/Images/cart.svg' }
];

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <>
            <nav className='flex items-center justify-between bg-black px-4 py-3 text-white md:px-6'>
                <div className='flex items-center gap-4'>
                    <img
                        src='https://www.gmesupply.com/images/logos/gme-web-white-alt.png'
                        alt='GME Supply Logo'
                        width='120'
                        height='40'
                        className='w-28 md:w-40'
                    />
                    <button onClick={toggleSidebar} className='text-2xl text-white'>
                        &#9776;
                    </button>
                </div>
                <div className='mx-6 hidden flex-1 items-center justify-center md:flex'>
                    <div className='flex items-center border bg-white'>
                        <input
                            type='search'
                            placeholder='Search for products'
                            className='w-2xl px-6 py-2 text-gray-700 outline-none'
                        />
                        <button className='bg-red-600 px-4 py-2 text-white'>🔍</button>
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

                <div className='hidden items-center gap-6 md:flex'>
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
                    <button className='absolute top-0 right-0 bottom-0 bg-red-600 px-4 text-white'>🔍</button>
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
        </>
    );
}
