'use client';

import { useState } from 'react';
import { MOBILE } from '@/utils/constant';
import LogoWithSidebarToggle from './logo-slidebar';
import NavLinks from './nav-links';
import SearchBar from './search-bar';
import Sidebar from './slidebar-mobile';

const navLinks = [
    { name: 'GME PRO', href: '/', icon: 'https://www.gmesupply.com/Content/Images/pro-logo.svg' },
    { name: 'Gearcor', href: '/', icon: 'https://www.gmesupply.com/Content/Images/gearcor-logo.svg' },
    { name: 'Quote', href: '/', icon: 'https://www.gmesupply.com/Content/Images/quote.svg' },
    { name: 'Sign in', href: '/b2b', icon: 'https://www.gmesupply.com/Content/Images/signin.svg' },
    { name: 'Cart', href: '/cart', icon: 'https://www.gmesupply.com/Content/Images/cart.svg' }
];

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className='top-0 z-50 md:sticky'>
            <nav className='flex items-center justify-between bg-black px-4 py-3 text-white md:px-6'>
                <LogoWithSidebarToggle toggleSidebar={toggleSidebar} />
                <SearchBar />
                <div className='mr-7 flex shrink-0 items-center gap-4'>
                    <NavLinks navLinks={navLinks} />
                </div>
            </nav>
            <SearchBar variant={MOBILE} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}
