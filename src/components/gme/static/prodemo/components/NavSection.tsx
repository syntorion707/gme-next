'use client';

import React from 'react';

const NavSection = () => {
    // Menu items JSON – internal to the component
    const navItems = [
        { label: 'Overview', link: '/prodemo' },
        { label: 'How It Works', link: '/prodemo/howitworks' },
        { label: 'Getting Started', link: '/prodemo/gettingstarted' }
    ];

    return (
        <div className='w-full bg-white px-6 py-4 font-semibold text-red-700 md:px-10 lg:px-20'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                {/* Menu items container */}
                <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-0 sm:space-x-6 lg:w-full lg:justify-start'>
                    {navItems.map((item, index) => (
                        <a key={index} href={item.link}>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>

                {/* Demo button */}
                <div className='sm:ml-auto sm:flex sm:items-center lg:absolute lg:right-20'>
                    <button
                        className='w-full rounded bg-red-600 px-6 py-1 font-semibold text-white shadow sm:w-48'
                        onClick={() => {
                            window.location.href = '/schedule-demo'; // Change this if needed
                        }}>
                        Schedule A Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavSection;
