import Image from 'next/image';
import { FC } from 'react';
import { ProductType } from '@/types/product';
import QuickShipInfo from './quick-ship-info';
import Ratings from './ratings';

interface ProductCardProps {
    product: ProductType;
}

const ListView: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='border-my-border-grey relative mt-8 flex w-full border p-2'>
            <div className='absolute top-0 left-0 w-32 bg-black md:right-0'>
                <p className='p-1 text-end text-xs font-bold text-white'>MULTIPLE OPTIONS</p>
            </div>
            <div className='flex items-center justify-center'>
                <Image
                    src={product.imageUrl || ''}
                    alt={product.name}
                    width={500}
                    height={500}
                    className='h-20 w-30 md:h-30 md:w-40 lg:h-40 lg:w-68 xl:w-68 2xl:h-40 2xl:w-50'
                />
            </div>
            <div className='w-full p-5'>
                <Ratings product={product} />
                <div className='mb-2 lg:h-30 xl:h-20'>
                    <h2 className='text-sm font-bold md:text-2xl'>{product.name}</h2>
                    <div>
                        <p className='md:text-md text-sm font-bold'>${product.price}</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <QuickShipInfo product={product} />
                    <div className='flex flex-col items-center justify-center xl:justify-self-end'>
                        {product.isBackOrder ? (
                            <button className='bg-secondary h-8 w-60 cursor-pointer rounded-2xl text-xs font-bold text-white hover:bg-black md:h-11 md:w-120 md:rounded-3xl lg:h-10 lg:w-98 xl:w-50'>
                                BACKORDER
                            </button>
                        ) : (
                            <button className='bg-primary h-8 w-60 cursor-pointer rounded-2xl text-xs font-bold text-white hover:bg-black md:h-11 md:w-120 md:rounded-3xl lg:h-10 lg:w-98 xl:w-50'>
                                CUSTOMIZE SELECTION
                            </button>
                        )}
                        <p className='mt-2 text-xs text-gray-400'>Sku: {product.sku}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListView;
