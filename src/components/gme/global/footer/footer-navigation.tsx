'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const FooterNavigation: React.FC<{
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
        <div className='grid grid-cols-1 gap-8 bg-black p-3 sm:grid-cols-2 sm:p-8 lg:grid-cols-5 lg:p-2'>
            {sections.map((section, index) => (
                <div key={index}>
                    <div
                        className='flex cursor-pointer items-center justify-between'
                        onClick={() => toggleSection(section.title)}>
                        <h3 className='mb-3 w-full border-b border-red-600 pb-2 text-2xl font-semibold md:w-auto md:border-none'>
                            {section.title}
                        </h3>
                        <span className='text-xl text-white md:hidden'>
                            {openSections[section.title] ? '➖' : '➕'}
                        </span>
                    </div>

                    {openSections[section.title] && (
                        <>
                            <ul className='space-y-2 md:block'>
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href} className='cursor-pointer text-xl text-white transition'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                                {section.title === 'CONNECT' && (
                                    <li className='mt-2 md:hidden'>
                                        <button className='rounded bg-red-600 px-4 py-2 text-white'>
                                            Easy Returns
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

const FooterNavigationWrapper: React.FC = () => {
    const navigationSections = [
        {
            title: 'INFORMATION',
            links: [
                { name: 'Careers', href: '#' },
                { name: 'Financing', href: '#' },
                { name: 'Shipping & Returns', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'About Us', href: '#' },
                { name: 'Sustainability', href: '#' }
            ]
        },
        {
            title: 'RESOURCES',
            links: [
                { name: 'GME PRO', href: '#' },
                { name: 'Gearcor Platform', href: '#' },
                { name: 'Free Catalog', href: '#' },
                { name: 'Product Videos', href: '#' },
                { name: 'Sizing Charts', href: '#' },
                { name: 'Knowledge Base', href: '#' },
                { name: 'Glossary of Terms', href: '#' }
            ]
        },
        {
            title: 'PRODUCTS',
            links: [
                { name: 'Shop by Brand', href: '#' },
                { name: "What's New", href: '#' },
                { name: 'Special offers', href: '#' },
                { name: 'Clearance', href: '#' }
            ]
        },
        {
            title: 'MY ACCOUNT',
            links: [
                { name: 'My Cart', href: '#' },
                { name: 'My Account', href: '#' },
                { name: 'My Orders', href: '#' },
                { name: 'My Gear List', href: '#' },
                { name: 'Quote Request', href: '#' }
            ]
        },
        {
            title: 'CONNECT',
            links: [
                { name: 'Contact Us', href: '#' },
                { name: 'Shop With a Gear Expert®', href: '#' },
                { name: 'Digital Catalog', href: '#' },
                { name: 'Find a Store', href: '#' }
            ]
        }
    ];

    return (
        <footer className='bg-black text-white'>
            <div className='block md:hidden'>
                <FooterNavigation sections={navigationSections} />
            </div>

            <div className='hidden bg-black px-4 py-[15px] md:block lg:px-[5%]'>
                <div className='mx-auto max-w-screen-2xl'>
                    <div className='grid grid-cols-5 gap-y-6 text-[14px] leading-6 font-normal text-white lg:grid-cols-5 lg:gap-x-10'>
                        {navigationSections.map((section, idx) => (
                            <div key={idx}>
                                <h3 className='mb-2 text-[13px] font-bold uppercase'>{section.title}</h3>
                                <ul className='space-y-1'>
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <a href={link.href} className='text-white'>
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                    {section.title === 'CONNECT' && (
                                        <li className='mt-2'>
                                            <button className='rounded bg-red-600 px-4 py-2 text-white'>
                                                Easy Returns
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='bg-black py-5 text-white'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-wrap items-center justify-center gap-4 px-4'>
                        {[
                            'visa.jpg',
                            'mc.png',
                            'ae.png',
                            'paypal.png',
                            'afterpay.png',
                            'nate_img.png',
                            'tif.jpg',
                            'acp.png',
                            'gsa_img.jpg',
                            'scte.png',
                            'fiber.png',
                            'sbca.gif'
                        ].map((img, idx) => (
                            <img
                                key={idx}
                                src={`https://www.gmesupply.com/images/footer/${img}`}
                                alt={img.split('.')[0]}
                                className={`object-contain ${idx <= 4 ? 'h-[50px] w-[50px]' : 'h-[50px] w-[140px]'}`}
                            />
                        ))}
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='text-sm'>POWERED BY</span>
                        <img
                            src='https://www.gmesupply.com/images/footer/colum_img.png'
                            alt='Columbia Safety'
                            className='h-[50px] w-[150px] object-contain'
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterNavigationWrapper;
