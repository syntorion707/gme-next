import Image from 'next/image';
import React from 'react';
import QuickShipInfo from './quick-ship-info';
import Ratings from './ratings';

interface ProductCardProps {
    product: ProductType;
}

const Gridview: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div key={product.id} className='relative flex w-full border border-gray-300 md:flex-col'>
            <div className='absolute left-0 w-32 bg-black md:right-0'>
                <p className='p-1 text-end text-xs font-bold text-white'>MULTIPLE OPTIONS</p>
            </div>
            <div className='flex items-center border-gray-300 md:justify-center md:border-b md:p-6'>
                <Image
                    src={product.imageUrl || ''}
                    alt={product.name}
                    width={160}
                    height={80}
                    className='h-20 w-40 md:h-40 md:w-auto 2xl:h-50 2xl:w-60'
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>
            <div className='mt-5 min-w-3/4 p-2 md:mt-auto md:p-3'>
                <Ratings />
                <div className='mb-5 md:h-17 lg:h-19'>
                    <h2 className='md:text-md lg:text-md line-clamp-3 text-sm font-extrabold xl:text-sm'>
                        {product.name}
                    </h2>
                    <div className='mt-1'>
                        <p className='font-semibold'>${product.price}</p>
                    </div>
                </div>
                <QuickShipInfo />
                <div className='addtocart flex flex-col items-center justify-center'>
                    <button className='h-10 w-60 rounded-3xl bg-red-700 text-xs font-bold text-white md:h-8 md:w-60 lg:w-45 2xl:w-82'>
                        CUSTOMIZE SELECTION
                    </button>
                    <div className='addtocart mt-2'>
                        <p className='text-xs text-gray-400'>Sku: {product.sku}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gridview;
