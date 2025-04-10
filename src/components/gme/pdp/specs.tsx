import React, { useState } from 'react';
import { ProductDetailsTypes } from '@/types/common';

const Specs: React.FC<ProductDetailsTypes> = ({ product }) => {
    const [showSpecs, setShowSpecs] = useState(false);
    const [showSpecsSku, setShowSpecsSku] = useState(false);

    const handleSpecsClick = () => {
        setShowSpecs(!showSpecs);
    };

    const handleSpecsSkuClick = () => {
        setShowSpecsSku(!showSpecsSku);
    };

    return (
        <div>
            <div className='border-primary mt-2 flex justify-between rounded-b-lg border-b-2 py-2'>
                <p className='text-md font-bold md:text-lg'>Specs</p>

                {showSpecs ? (
                    <svg
                        className='h-6 w-6 cursor-pointer font-bold text-black'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        onClick={handleSpecsClick}>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                ) : (
                    <svg
                        className='h-6 w-6 cursor-pointer font-bold text-black'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        onClick={handleSpecsClick}>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                    </svg>
                )}
            </div>

            {showSpecs && (
                <div className='p-2'>
                    <h1 className='py-2 text-xl font-bold md:text-3xl'>{product?.specs?.product_code}</h1>
                    <div className='mt-2'>
                        <div className='flex justify-between bg-gray-100 p-4'>
                            <h2 className='text black text-sm font-bold md:text-lg'>Manufacturer :</h2>
                            <h2 className='text black mr-20 text-sm md:text-lg'>{product?.specs?.manufacturer}</h2>
                        </div>
                        <div className='my-2 flex gap-2 border-b border-gray-200 p-2'>
                            <p className='text-md md:text-lg'>{product?.specs?.sku}</p>
                            {showSpecsSku ? (
                                <svg
                                    className='h-6 w-6 cursor-pointer font-bold text-black'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    onClick={handleSpecsSkuClick}>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M5 15l7-7 7 7'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='h-6 w-6 cursor-pointer font-bold text-black'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    onClick={handleSpecsSkuClick}>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M19 9l-7 7-7-7'
                                    />
                                </svg>
                            )}
                        </div>

                        {showSpecsSku && (
                            <div className='p-2'>
                                <div className='flex gap-10 border-y border-gray-200 bg-gray-100 sm:gap-20 md:gap-60'>
                                    <p className='text-md p-2 font-bold md:text-lg'>Width :</p>
                                    <p className='text-md p-2 md:text-lg'>{product?.specs?.dimensions?.width}</p>
                                </div>

                                <div className='flex gap-10 sm:gap-20 md:gap-60'>
                                    <p className='text-md p-2 font-bold md:text-lg'>Length :</p>
                                    <p className='text-md p-2 md:text-lg'>{product?.specs?.dimensions?.length}</p>
                                </div>

                                <div className='flex gap-10 bg-gray-100 sm:gap-20 md:gap-60'>
                                    <p className='text-md p-2 font-bold md:text-lg'>Weight :</p>
                                    <p className='text-md p-2 md:text-lg'>{product?.specs?.weight}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Specs;
