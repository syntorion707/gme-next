'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';
import { BsShop } from 'react-icons/bs';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { FiChevronRight, FiHelpCircle, FiTag } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { Featured_Brands, SHOP_ALL_CATEGORY, SHOP_BY_INDUSTRY, SIGN_IN } from '@/utils/constant';

interface MenuItemProps {
    icon: ReactNode;
    label: string;
    labelClass?: string;
}

const categories = [
    {
        name: 'Tower Climbing Gear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90005_A.jpg',
        href: '/tower-climbing-gear'
    },
    {
        name: 'Utility',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/376450_cat_lading_img.jpg',
        href: '/utility'
    },
    {
        name: 'Solar Industry Gear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90025_A_A.jpg',
        href: '/solar-industry-gear'
    },
    {
        name: 'Wind Technician Gear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90025_A_A.jpg',
        href: '/wind-technician-gear'
    },
    {
        name: 'Fiber',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90020.jpg',
        href: '/fiber'
    },
    {
        name: 'Cable & Satellite',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19200_cat_lading_img.jpg',
        href: '/cable-satellite'
    },
    {
        name: 'Construction (Aerial & Burial)',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19150_cat_lading_img.jpg',
        href: '/construction'
    },
    {
        name: 'Telco & Structured Wiring',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19300_cat_lading_img.jpg',
        href: '/telco'
    },
    {
        name: 'Fall Protection',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19350_cat_lading_img.jpg',
        href: '/fall-protection'
    },
    {
        name: 'PPE & Work Wear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/12540_cat_lading_img.jpg',
        href: '/ppe-workwear'
    },
    {
        name: 'Rope',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/12473_cat_lading_img.jpg',
        href: '/rope'
    },
    {
        name: 'Rescue',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-9025_A.jpg',
        href: '/rescue'
    },
    {
        name: 'Lifting & Rigging',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/C-HB-THERNKITS_A.jpg',
        href: '/lifting-rigging'
    },
    {
        name: 'Installation Materials & Consumables',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/63716_cat_lading_img_A.jpg',
        href: '/installation-materials'
    },
    {
        name: 'Tools',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/495-2998-23_A_A.jpg',
        href: '/tools'
    },
    {
        name: 'Ladders',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/ladders.jpg',
        href: '/ladders'
    },
    {
        name: 'Bags, Buckets, & Storage',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-5105_A.jpg',
        href: '/bags-storage'
    },
    {
        name: 'Power and Light',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/495-2144-20.jpg',
        href: '/power-light'
    },
    {
        name: 'Device & Testing',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/FS-FS60_A_A.jpg',
        href: '/device-testing'
    },
    {
        name: 'Signage',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-2000_A.jpg',
        href: '/signage'
    },
    {
        name: 'Safety & First Aid',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/ED-13418.jpg',
        href: '/safety-first-aid'
    },
    {
        name: 'Tree Care',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/PZ-C069AA00.jpg',
        href: '/tree-care'
    },
    {
        name: 'Deal Zone',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/Deal-Zone-Graphic.jpg',
        href: '/deal-zone'
    },
    {
        name: 'More',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/13610_cat_lading_img.jpg',
        href: '/more'
    }
];
export default function Sidebar({
    isOpen,
    toggleSidebar
}: {
    isOpen: boolean;
    toggleSidebar: (forceClose?: boolean) => void;
}) {
    const pathname = usePathname();
    const previousPath = useRef(pathname);

    useEffect(() => {
        if (previousPath.current !== pathname && isOpen) {
            toggleSidebar(true);
        }
        previousPath.current = pathname;
    }, [pathname, isOpen]);

    return (
        <div
            className={`fixed top-0 left-0 z-50 h-full w-full transform overflow-y-auto bg-white shadow-lg transition-transform duration-300 ease-in-out lg:w-[350px] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-end px-4 pt-3'>
                <button onClick={() => toggleSidebar(true)} className='text-lg text-black'>
                    ✖
                </button>
            </div>
            <div className='flex w-full justify-center border-b border-gray-300 pt-2 pb-3 sm:hidden'>
                <Image
                    src='https://www.gmesupply.com/Content/Images/gme-secure-checkout.svg'
                    alt='Secure Checkout'
                    width={226}
                    height={70}
                    className='img-fluid'
                />
            </div>
            <div className='mb-4 ml-5 hidden border-b-1 border-red-600 px-6 sm:block'>
                <Link href='/'>
                    <div onClick={() => toggleSidebar(true)} className='cursor-pointer'>
                        <h2 className='pb-2 text-[18px] text-black'>{SHOP_ALL_CATEGORY}</h2>
                    </div>
                </Link>
            </div>
            <div className='block w-full sm:hidden'>
                <div className='w-full border-b border-gray-300 px-6 py-3'>
                    <h2
                        onClick={() => toggleSidebar(true)}
                        className='text-primary flex cursor-pointer items-center justify-between text-[16px] font-bold'>
                        {Featured_Brands}
                        <span className='text-[16px] text-black'>&#10140;</span>
                    </h2>
                </div>
                <div className='w-full border-b border-gray-300 px-6 py-3'>
                    <h2
                        onClick={() => toggleSidebar(true)}
                        className='flex cursor-pointer items-center justify-between text-[16px] font-semibold text-black'>
                        {SHOP_BY_INDUSTRY}
                        <span className='text-[16px] text-black'>&#10140;</span>
                    </h2>
                </div>
            </div>
            <ul className='flex flex-col pb-10 md:gap-3'>
                {categories.map((cat, idx) => (
                    <li key={idx} className='w-full border-b border-gray-300 px-6 py-3 sm:border-0 sm:py-0'>
                        <Link href={cat.href}>
                            <div
                                className='group flex items-center justify-between'
                                onClick={() => toggleSidebar(true)}>
                                <div className='flex items-center gap-3'>
                                    <Image
                                        src={cat.img}
                                        alt={cat.name}
                                        width={40}
                                        height={40}
                                        className='rounded object-cover'
                                    />
                                    <span className='text-[15px] leading-5 font-semibold text-black group-hover:text-red-600'>
                                        {cat.name}
                                    </span>
                                </div>
                                <span className='text-[16px] text-black group-hover:text-red-600'>&#10140;</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='block w-full sm:hidden'>
                <div className='h-full w-full space-y-6 p-4 pb-10 shadow-lg'>
                    <div className='space-y-2'>
                        <MenuItem
                            icon={
                                <img
                                    src='https://www.gmesupply.com/Content/Images/quote.svg'
                                    alt='Quote Request'
                                    className='h-5 w-5 bg-black object-contain'
                                />
                            }
                            label='Quote Request'
                        />
                        <MenuItem
                            icon={
                                <img
                                    src='https://www.gmesupply.com/Content/Images/pro-logo.svg'
                                    alt='GME PRO'
                                    className='h-5 w-5 bg-black object-contain'
                                />
                            }
                            label='GME PRO'
                        />
                        <MenuItem
                            icon={
                                <img
                                    src='https://www.gmesupply.com/Content/Images/gearcor-logo.svg'
                                    alt='Gearcor'
                                    className='h-5 w-5 bg-black object-contain'
                                />
                            }
                            label='Gearcor'
                        />
                        <MenuItem icon={<FiHelpCircle />} label='Knowledge Base' />
                        <MenuItem icon={<MdOutlineMail />} label='Contact Us' />
                    </div>
                    <hr className='border-gray-300' />
                    <div className='space-y-2'>
                        <MenuItem icon={<BsShop />} label='Shop' />
                        <MenuItem
                            icon={<FiTag className='text-green-600' />}
                            label='Deals'
                            labelClass='text-green-600'
                        />
                        <MenuItem icon={<FaStar />} label="What's New" />
                        <MenuItem icon={<FaShoppingCart />} label='My Cart' />
                    </div>
                    <div className='flex justify-center pt-6'>
                        <button className='w-[200px] rounded bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700'>
                            {SIGN_IN}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
function MenuItem({ icon, label, labelClass = '' }: MenuItemProps) {
    return (
        <div className='flex cursor-pointer items-center gap-3 px-1 py-2 font-bold text-black'>
            <div className='text-xl'>{icon}</div>
            <div className={`text-sm ${labelClass}`}>{label}</div>
        </div>
    );
}
