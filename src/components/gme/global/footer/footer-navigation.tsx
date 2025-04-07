'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const FooterNavigation: React.FC<{
    sections: { title: string; links: { name: string; href: string }[] }[];
}> = ({ sections }) => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(() =>
        sections.reduce(
            (acc, section) => {
                acc[section.title] = true; // Change to `true` if you want all open by default

                return acc;
            },
            {} as { [key: string]: boolean }
        )
    );

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className='grid grid-cols-1 gap-8 bg-black p-3 sm:grid-cols-2 sm:p-8 lg:grid-cols-5 lg:p-10'>
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
                            </ul>

                            {section.title === 'CONNECT' && (
                                <div className='mt-4 md:block'>
                                    <button className='rounded bg-red-600 px-4 py-2 text-white'>Easy Returns</button>
                                </div>
                            )}
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
            <div className='container mx-auto py-6 sm:py-8 lg:py-0'>
                <FooterNavigation sections={navigationSections} />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px 0'
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                        flexWrap: 'wrap'
                    }}>
                    {['visa.jpg', 'mc.png', 'ae.png', 'paypal.png', 'afterpay.png'].map((img, idx) => (
                        <img
                            key={idx}
                            src={`https://www.gmesupply.com/images/footer/${img}`}
                            alt={img.split('.')[0]}
                            style={{
                                width: '50px',
                                height: '50px',
                                objectFit: 'contain'
                            }}
                        />
                    ))}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                        flexWrap: 'wrap'
                    }}>
                    {['nate_img.png', 'tif.jpg', 'acp.png', 'scte.png', 'fiber.png', 'sbca.gif'].map((img, idx) => (
                        <img
                            key={idx}
                            src={`https://www.gmesupply.com/images/footer/${img}`}
                            alt={img.split('.')[0]}
                            style={{
                                width: '150px',
                                height: '50px',
                                objectFit: 'contain'
                            }}
                        />
                    ))}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                        flexWrap: 'wrap'
                    }}>
                    <a href='https://www.gsaadvantage.gov/ref_text/47QSWA20D002U/47QSWA20D002U_online.htm'>
                        <img
                            src='https://www.gmesupply.com/images/footer/gsa_img.jpg'
                            alt='GSA'
                            style={{
                                width: '150px',
                                height: '60px',
                                objectFit: 'contain'
                            }}
                        />
                    </a>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'white'
                        }}>
                        <span>POWERED BY</span>
                        <img
                            src='https://www.gmesupply.com/images/footer/colum_img.png'
                            alt='Columbia Safety'
                            style={{
                                width: '150px',
                                height: '60px',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterNavigationWrapper;
