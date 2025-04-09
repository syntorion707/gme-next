'use client';

import React, { useState } from 'react';
import ScheduleDemoModal from './ScheduleDemoModel';

const NavSection = () => {
    // Menu items JSON – internal to the component
    const navItems = [
        { label: 'Overview', link: '/prodemo' },
        { label: 'How It Works', link: '/prodemo/howitworks' },
        { label: 'Getting Started', link: '/prodemo/gettingstarted' }
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='w-full bg-white px-6 py-4 font-semibold md:px-10 lg:px-20'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                {/* Menu items container */}
                <div className='flex flex-col items-center gap-2 text-red-700 sm:flex-row sm:gap-0 sm:space-x-6 lg:w-full lg:justify-start'>
                    {navItems.map((item, index) => (
                        <a key={index} href={item.link}>
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>

                {/* Demo button */}
                <div className='sm:ml-auto sm:flex sm:items-center lg:absolute lg:right-20'>
                    <button
                        className='w-full cursor-pointer rounded bg-red-600 px-6 py-1 font-semibold text-white shadow sm:w-48'
                        onClick={() => {
                            setIsModalOpen(true);
                        }}>
                        Schedule A Demo
                    </button>
                </div>
            </div>
            {/* {Schedule A Demo} */}
            <ScheduleDemoModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default NavSection;
