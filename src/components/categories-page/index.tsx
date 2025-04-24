'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ImageCarousel from './image-carousel';

const CategoryPage = () => {
    const categories = [
        {
            category: 'Featured Brands',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ]
        },
        {
            category: 'Fall Protection',
            subCategory: [
                {
                    name: 'Anchorage',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/RF-680003.jpg'
                },
                {
                    name: 'Bosun Chairs',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/FH-8039.jpg'
                },
                {
                    name: 'Carabiners & Hardware',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-CARABINERPACK.jpg'
                },
                {
                    name: 'Confined Space Systems',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/FC-S50G-M7.jpg'
                },
                {
                    name: 'CSA Compliant Gear',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/FP-67601.jpg'
                },
                {
                    name: 'Descent Devices',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/PZ-D020AA00.jpg'
                },
                {
                    name: 'Fall Protection Kits',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90014.jpg'
                },
                {
                    name: 'Guardrails & Nets',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GF-15183.jpg'
                },
                {
                    name: 'Harnesses',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/12368_cat_lading_img.jpg'
                },
                {
                    name: 'Horizontal Systems',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/DS-7605060.jpg'
                },
                {
                    name: 'Pole Climbing',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/C-PZ-L052EA.jpg'
                },
                {
                    name: 'Rescue Equipment',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-9025.jpg'
                },
                {
                    name: 'Self-Retracting Lifelines',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/DS-3590517.jpg'
                },
                {
                    name: 'Shock Absorbing Lanyards',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/SZ-019-2009.jpg'
                },
                {
                    name: 'Utility Safety',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/DS-1204057.jpg'
                },
                {
                    name: 'Vertical Systems',
                    image: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/DS-6160054.jpg'
                }
            ],
            title: 'Fall Protection Subcategories'
        },
        {
            category: 'PPE & Work Wear',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ]
        },
        {
            category: 'Lifting & Rigging',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'Lifting & Rigging Subcategories'
        },
        {
            category: 'Rope',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'Rope Subcategories'
        },
        {
            category: 'Rescue',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'Rescue Subcategories'
        },
        {
            category: 'First Aid',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'First Aid Subcategories'
        },
        {
            category: 'Tools',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'Tools Subcategories'
        },
        {
            category: 'Bags, Buckets, & Storage',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'Bags, Buckets, & Storage Subcategories'
        },
        {
            category: 'Devices & Testing',
            subCategory: [
                { name: 'Anchorage' },
                { name: 'Bosun Chairs' },
                { name: 'Carabiners & Hardware' },
                { name: 'Confined Space Systems' }
            ],
            title: 'Devices & Testing Subcategories'
        }
    ];

    const url = '/fall-protection';

    // Extract the category name from the URL
    const currentCategoryName = url.replace('/', '').replace(/-/g, ' ').toLowerCase();

    // Filter categories to match the current URL
    const filteredCategories = categories.filter((cat) => cat.category.toLowerCase() === currentCategoryName);

    const [subCategory, setSubCategory] = useState(false);
    const handleSubCategoryClick = () => {
        setSubCategory(!subCategory);
    };

    return (
        <div className='mt-2 py-4 font-sans'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <p className='text-xs md:text-sm'>Home {'>'} Fall Protection</p>
                <h1 className='text-primary px-4 text-center text-lg uppercase md:text-4xl lg:text-end'>
                    Fall Protection
                </h1>
            </div>
            <div className='flex gap-2 py-2'>
                {filteredCategories.map((category, index) => (
                    <div key={index} className='hidden w-[25%] border border-gray-200 px-4 py-2 text-start lg:block'>
                        {category.title && (
                            <div className='flex items-center gap-2'>
                                <h2 className='text-md md:text-md font-bold'>{category.title}</h2>
                                {subCategory ? (
                                    <svg
                                        className='text--black h-6 w-6 cursor-pointer'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        onClick={handleSubCategoryClick}>
                                        {' '}
                                        <polyline points='6 9 12 15 18 9' />
                                    </svg>
                                ) : (
                                    <svg
                                        className='h-6 w-6 cursor-pointer text-black'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        onClick={handleSubCategoryClick}>
                                        {' '}
                                        <polyline points='18 15 12 9 6 15' />
                                    </svg>
                                )}
                            </div>
                        )}
                        <div className=''>
                            {category.subCategory.map((subCategory, subIndex) => {
                                const formattedName = subCategory.name.toLowerCase().replace(/\s+/g, '-');
                                const fullPath = `${url}/${formattedName}`;

                                return (
                                    <Link key={subIndex} href={fullPath}>
                                        <p className='text-md py-2 text-gray-500 lg:text-lg'> {subCategory.name}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <div className='w-full px-4 lg:w-[75%]'>
                    <ImageCarousel />

                    {filteredCategories.map((category, index) => (
                        <div key={index} className='mb-8'>
                            <div className='grid grid-cols-1 gap-4 py-2 md:grid-cols-3 lg:grid-cols-6'>
                                {category.subCategory.map((subCategory: any, subIndex: number) => {
                                    // const formattedName = subCategory.name.toLowerCase().replace(/\s+/g, '-');
                                    // const fullPath = `${url}/${formattedName}`;

                                    return (
                                        <div key={subIndex} className='py-2'>
                                            <div className='flex h-[25%] w-full justify-center'>
                                                <h2 className='hover:text-primary cursor-pointer py-4 text-center text-sm font-bold md:py-2'>
                                                    {subCategory.name}
                                                </h2>
                                            </div>

                                            <Link
                                                // href={fullPath}
                                                href='/plp'
                                                className='flex h-full w-full flex-col items-center text-center transition hover:shadow-lg hover:shadow-black md:h-[75%]'>
                                                <div className=''>
                                                    <Image
                                                        src={subCategory?.image}
                                                        alt={subCategory?.name || 'product-image'}
                                                        height={170}
                                                        width={170}
                                                        className='h-full w-[300px] object-contain md:h-[170px] md:w-[170px] md:object-cover'
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <div className='grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-2'>
                        <iframe
                            src='https://www.youtube.com/embed/xvreUcPmefM?list=PLZQI6zuBv9QNy0FpWF8DcKZw_VxtSl7RM'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            className='aspect-video h-50 w-full lg:h-[200px] lg:w-[400px]'></iframe>
                    </div>

                    <div className='p-4'>
                        <h2 className='text-lg font-bold md:text-2xl'>Fall Protection Safety Gear & Equipment</h2>
                        <p className='py-2 text-sm'>
                            Fall protection gear and equipment is equipment that is used to protect people working
                            at-height from falling or in the event of a fall. You need fall protection to stay safe and
                            compliant on the job site. GME Supply has all the fall protection you need for working
                            at-height. Whether you are looking for an SRL, safety harness, lanyards, and/or anchorage
                            we've got it.
                        </p>
                        <p className='py-2 text-sm'>
                            The ideal method of fall prevention would be to eliminate all fall hazards from the
                            workplace. However, this is seldom possible. Since many fall hazards cannot be eliminated,
                            it is important to identify potential hazards before beginning a project. Whenever the
                            possibility for a fall exists, a fall protection system must be used to ensure the safety of
                            workers.
                        </p>
                        <p className='py-2 text-sm'>
                            Personal fall protection equipment is divided into two broad categories: Fall Prevention
                            (FP) equipment and Fall Arrest (FA) equipment. Workers must be provided with personal
                            protective equipment appropriate to the application for which it is to be used. The term
                            "personal" is used because the individual wearer is an integral part of the system and must
                            be thoroughly trained in the proper use of the personal protective equipment. Many of our
                            products may also be used in Positioning (PO), Suspension (SU), or Retrieval (RT)
                            applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
