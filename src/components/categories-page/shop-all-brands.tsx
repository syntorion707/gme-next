'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ShopAllBrands = () => {
    const allBrands = [
        {
            name: '2W International Corporation',
            logo: 'https://www.gmesupply.com/media/catalog/product/2/w/2w_logo_1.jpg'
        },
        { name: '3M ', logo: 'https://www.gmesupply.com/media/catalog/product/3/m/3M-Logo.jpg' },
        { name: '3z-telecom', logo: 'https://www.gmesupply.com/media/catalog/product/3/z/3z-telecom.jpg' },
        { name: '5.11', logo: 'https://www.gmesupply.com/media/catalog/product/3/z/3z-telecom.jpg' },
        { name: 'Buckingham', logo: 'https://www.gmesupply.com/media/catalog/product/a/b/ABB%20Logo.png' },
        { name: 'DBI Sala ', logo: 'https://www.gmesupply.com/media/catalog/product/a/b/ABB%20Logo.png' },
        { name: 'Elk River', logo: 'https://www.gmesupply.com/media/catalog/product/1/2/1280px-ABUS_Logo.svg.png' },
        { name: 'Ergodyne', logo: 'https://www.gmesupply.com/media/catalog/product/a/c/Accuform.jpg' },
        {
            name: 'FallTech',
            logo: 'https://www.gmesupply.com/media/catalog/product/n/e/NEW_Adenna%20Logo_RGB_2018_WEB%20ONLY.jpg'
        },
        {
            name: 'fieldSENSE USA ',
            logo: 'https://www.gmesupply.com/media/catalog/product/n/e/NEW_Adenna%20Logo_RGB_2018_WEB%20ONLY.jpg'
        },
        { name: 'Kenwood', logo: 'https://www.gmesupply.com/media/catalog/product/a/e/aervoe.jpg' },
        { name: 'Klein Tools', logo: 'https://www.gmesupply.com/media/catalog/product/a/f/AFL-logo.png' }
    ];

    const [brands, setBrands] = useState(true);

    const handleBrandsClick = () => {
        setBrands(!brands);
    };

    const url = '/allbrands';

    return (
        <div className='mt-2 py-4 font-sans'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <p className='text-xs md:text-sm'>Home {'>'} Brands</p>
                <h1 className='text-primary px-4 text-center text-lg uppercase md:text-4xl lg:text-end'>Brands</h1>
            </div>
            <div className='flex gap-2 py-2'>
                <div className='hidden w-[25%] border border-gray-200 px-4 py-2 text-start lg:block'>
                    <div className='flex items-center justify-between gap-2'>
                        <h2 className='text-md md:text-md hover:text-primary font-bold'>Brands Subcategories</h2>
                        {brands ? (
                            <svg
                                className='h-6 w-6 cursor-pointer text-black'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                onClick={handleBrandsClick}>
                                <polyline points='6 9 12 15 18 9' />
                            </svg>
                        ) : (
                            <svg
                                className='h-6 w-6 cursor-pointer text-black'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                onClick={handleBrandsClick}>
                                <polyline points='18 15 12 9 6 15' />
                            </svg>
                        )}
                    </div>

                    {brands && (
                        <div className='pt-4'>
                            {allBrands.map((brand, index) => {
                                const formattedName = brand.name.toLowerCase().replace(/\s+/g, '-');
                                const fullPath = `${url}/${formattedName}`;
                                
return (
                                    <Link key={index} href={fullPath}>
                                        <p className='text-md py-2 text-gray-500 lg:text-lg'>{brand.name}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className='w-full px-4 lg:w-[75%]'>
                    <div className='grid grid-cols-1 gap-4 py-2 md:grid-cols-3 lg:grid-cols-4'>
                        {allBrands.map((brand, index) => {
                            const formattedName = brand.name.toLowerCase().replace(/\s+/g, '-');
                            const fullPath = `${url}/${formattedName}`;

                            return (
                                <div
                                    key={index}
                                    className='border border-gray-200 py-2 hover:shadow-lg hover:shadow-black'>
                                    <Link href={fullPath}>
                                        <div
                                            key={index}
                                            className='flex h-35 w-full items-center justify-center bg-white p-2'>
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                width={100}
                                                height={100}
                                                className='max-h-26 object-contain'
                                            />
                                        </div>
                                        <div className='flex h-[25%] w-full justify-center'>
                                            <h2 className='text-primary cursor-pointer text-center text-sm font-bold'>
                                                {brand.name}
                                            </h2>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopAllBrands;
