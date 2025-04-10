import React, { useEffect, useState } from 'react';
import QuantityButton from './quantity-button';

const DropdownForProduct = () => {
    const product = {
        productName: '3M Scotchlok Copper Two Hole Long Barrel Lug',
        productDescription:
            '3M Scotchlok 31100 2 Hole Compression Lug is for use with copper conductors only. The seamless copper construction offers high conductivity and a tin plated finish resists corrosion. It is rated for 35 kV voltage applications. Long barrel ensures a secure fit and offers reliable performance. Barrel has colored stripes that help to indicate the wire range. Suitable for indoor and outdoor applications. Made of copper for good conductivity and tin plating for corrosion resistance. For up to 35 kV applications. UL Listed, CSA Certified and RoHS 2011/65/EU Compliant',
        productPrice: '$148.99 to $699.99',
        productImages: [
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(63).png',
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(62).png',
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(62).png',
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(62).png',
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(62).png'
        ],
        productRating: 4,
        logo: 'https://www.gmesupply.com/media/catalog/product/3/m/3M-Logo.jpg',
        model: 'C-3M-31130',
        stock: 'C-3M-31130',
        wireGauge: [
            { value: '1000 KCMIL' },
            { value: '2/0 AWG' },
            { value: '250 kcmil' },
            { value: '3/0 AWG' },
            { value: '300 kcmil' },
            { value: '350 kcmil' },
            { value: '4/0 AWG' },
            { value: '500 kcmil' },
            { value: '600 kcmil' },
            { value: '750 kcmil' }
        ],
        length: '1/2 in'
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`h-3 w-3 md:w-5 lg:h-5 ${i < product.productRating ? 'text-yellow-500' : 'text-gray-300'}`}
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                </svg>
            );
        }

        return stars;
    };

    return (
        <div
            className={`fixed right-0 left-0 z-50 bg-white shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='mt-2 flex justify-center gap-4 p-2 shadow-md shadow-black md:gap-8'>
                <div className='m-2 hidden lg:block'>
                    {/* Product Name  */}
                    <h1 className='text-xl font-bold md:text-2xl'>{product?.productName}</h1>

                    <div className='mt-2 flex gap-2'>
                        {/* Review stars */}
                        <div className='flex justify-between p-2'>
                            <div className='lg:text-md flex gap-1 text-sm'>{renderStars()}</div>
                            <div className='flex justify-between gap-4'>
                                <p className='cursor-pointer pl-2 text-xs md:text-sm lg:text-lg'>0 Reviews</p>
                                <div className='border-l border-black'></div>
                                <p className='cursor-pointer text-xs md:text-sm lg:text-lg'>Write a review</p>
                            </div>
                        </div>

                        <div className='flex gap-2 p-2'>
                            <svg
                                className='h-6 w-6 text-gray-500'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                stroke-width='2'
                                stroke='currentColor'
                                fill='none'
                                stroke-linecap='round'
                                stroke-linejoin='round'>
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <path d='M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10' />
                                <path d='M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2' />
                            </svg>
                            <p className='cursor-pointer text-sm text-blue-500 hover:text-blue-700'>Ask a question</p>
                        </div>
                    </div>
                </div>

                <div className='m-2'>
                    <p className='md:text:lg text-sm font-bold'>Please select an option below</p>

                    {/* Quantity Button  */}
                    <div className='pt-2'>
                        <QuantityButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownForProduct;
