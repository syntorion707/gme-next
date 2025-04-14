import Link from 'next/link';
import React from 'react';

interface GearcorPlatformNavigationBarProps {
    navItems: string[];
}

const GearcorPlatformNavigationBar: React.FC<GearcorPlatformNavigationBarProps> = ({ navItems }) => {
    return (
        <div className='w-full border-b border-gray-200 bg-white'>
            <div className='container'>
                <div className='flex flex-col items-center gap-y-4 py-3 lg:flex-row lg:justify-between'>
                    {/* Navigation Items */}
                    <div className='flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-start lg:gap-x-6'>
                        {navItems.map((item) => (
                            <Link key={item} href='#' className='text-primary text-sm font-bold transition-colors'>
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Schedule Demo Button */}
                    <div className='w-full lg:w-auto'>
                        <button className='bg-primary w-full rounded-md px-6 py-2 text-sm font-semibold whitespace-nowrap text-white transition-colors lg:w-auto'>
                            Schedule A Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GearcorPlatformNavigationBar;
