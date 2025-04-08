import React from 'react';
import { ProductDetailsTypes } from '@/types/common';

const ProductDetails: React.FC<ProductDetailsTypes> = ({ product }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`h-3 w-3 md:h-5 md:w-5 ${i < product.productRating ? 'text-yellow-500' : 'text-gray-300'}`}
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
        <div>
            {/* Modal and Stock  */}
            <div className='flex justify-between text-xs text-gray-500 md:text-sm'>
                <p>Modal#: {product?.model}</p>
                <p>Stock#: {product?.stock}</p>
            </div>
            <div className='flex justify-between'>
                <div className='py-2'>
                    {/* productName */}
                    <h1 className='text-lg font-bold sm:text-xl md:text-2xl'>{product?.productName}</h1>

                    {/* Review stars */}
                    <div className='flex justify-between gap-2 py-2'>
                        <div className='flex gap-1'>{renderStars()}</div>
                        <div className='flex gap-2 md:justify-between md:gap-4'>
                            <p className='cursor-pointer text-xs md:text-sm lg:text-lg'>0 Reviews</p>
                            <div className='border-l border-black'></div>
                            <p className='cursor-pointer text-xs md:text-sm lg:text-lg'>Write a review</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <svg
                            className='h-6 w-6 text-gray-500'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <path d='M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10' />
                            <path d='M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2' />
                        </svg>
                        <p className='cursor-pointer text-sm text-blue-500 hover:text-blue-700'>Ask a question</p>
                    </div>

                    {/* product Price */}
                    <div className='flex gap-2 py-2'>
                        <p className='text-md font-bold md:text-lg'>{product?.productPrice}</p>
                        <p className='text-md md:text-lg'>CS (10)</p>
                    </div>
                    <p className='md:text-md text-sm font-bold text-gray-500'>THIS ITEM SHIPS FOR FREE!</p>
                </div>

                {/* Brand logo */}
                <div className='p-4'>
                    <img src={product?.logo} alt='logo' className='hidden h-15 w-48 object-fill md:block' />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
