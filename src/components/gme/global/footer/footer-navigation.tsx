'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export const FooterNavigation: React.FC<{
    sections: { title: string; links: { name: string; href: string }[] }[];
}> = ({ sections }) => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(() =>
        sections.reduce(
            (acc, section) => {
                acc[section.title] = true;
                
return acc;
            },
            {} as { [key: string]: boolean }
        )
    );

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className='grid grid-cols-1 gap-6 bg-black px-4 py-4 sm:grid-cols-2 sm:p-8 md:grid-cols-5 lg:ml-20 lg:grid-cols-5'>
            {sections.map((section, index) => (
                <div key={index}>
                    <div
                        className='flex cursor-pointer items-center justify-between'
                        onClick={() => toggleSection(section.title)}>
                        <h3 className='mb-2 w-full text-[13px] font-bold tracking-wide text-white uppercase md:w-auto'>
                            {section.title}
                        </h3>
                        <span className='text-xl text-white md:hidden'>
                            {openSections[section.title] ? '➖' : '➕'}
                        </span>
                    </div>

                    {openSections[section.title] && (
                        <ul className='space-y-1 text-sm text-white'>
                            {section.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className='transition duration-200 hover:text-red-500'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            {section.title === 'CONNECT' && (
                                <li className='mt-2'>
                                    <button className='rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700'>
                                        Easy Returns
                                    </button>
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FooterNavigation;
