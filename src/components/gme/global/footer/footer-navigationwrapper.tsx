import React from 'react';
import { POWERED_BY } from '@/utils/constant';
import FooterNavigation from './footer-navigation';

export const FooterNavigationWrapper: React.FC = () => {
    const sections = [
        {
            title: 'INFORMATION',
            links: [
                { name: 'Careers', href: '#' },
                { name: 'Financing', href: '/financing' },
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
            <FooterNavigation sections={sections} />
            <div className='bg-black py-5 text-white'>
                <div className='flex flex-col items-center gap-4 overflow-hidden'>
                    <div className='flex flex-wrap items-center justify-center gap-2 px-10'>
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
                        <span className='text-sm'>{POWERED_BY}</span>
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
