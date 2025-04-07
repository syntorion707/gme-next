'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Product {
    image: string;
    alt: string;
    title: string;
    price: string;
    status?: 'QUICK SHIP' | 'ON BACKORDER' | string;
    shipping?: string;
    delivery?: string;
    code?: string;
}

interface NewProductsProps {
    products: Product[];
}

export const NewProducts: React.FC<NewProductsProps> = ({ products }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const totalSlides = Math.ceil(products.length / slidesToShow);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setSlidesToShow(1);
            else if (window.innerWidth < 1024) setSlidesToShow(2);
            else setSlidesToShow(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlideProduct = () => {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    };

    const prevSlideProduct = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className='mt-6 flex flex-col items-center bg-[#ECECEC] py-8'>
            <span className='text-2x1 mb-4 w-full border-b-2 border-[#ce181e] p-2 text-center font-bold uppercase md:mb-8 md:text-3xl'>
                What's <span className='text-[#ce181e]'>New</span>
            </span>

            <div className='relative w-full overflow-hidden'>
                <div className='absolute inset-y-0 -right-12 -left-12'>
                    <button
                        onClick={prevSlideProduct}
                        className='absolute top-1/2 left-4 z-10 -translate-y-1/2 p-3 text-2xl text-white/50 transition-colors duration-300 hover:text-white disabled:opacity-50 md:left-8 md:p-4 md:text-4xl'
                        disabled={currentSlide === 0}>
                        &#10094;
                    </button>
                    <button
                        onClick={nextSlideProduct}
                        className='absolute top-1/2 right-4 z-10 -translate-y-1/2 p-3 text-2xl text-white/50 transition-colors duration-300 hover:text-white disabled:opacity-50 md:right-8 md:p-4 md:text-4xl'
                        disabled={currentSlide === totalSlides - 1}>
                        &#10095;
                    </button>
                </div>

                <div className='relative overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{
                            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                            width: `${totalSlides * 100}%`
                        }}>
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className='w-full' style={{ width: `${100 / totalSlides}%` }}>
                                <div className='grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-4'>
                                    {products
                                        .slice(slideIndex * slidesToShow, slideIndex * slidesToShow + slidesToShow)
                                        .map((product, index) => (
                                            <div
                                                key={index}
                                                className='relative h-[520px] bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                                                <div className='absolute top-0 left-0 bg-[#ce181e] px-3 py-1 text-sm font-bold text-white'>
                                                    NEW!
                                                </div>
                                                <div className='relative mt-5 h-48'>
                                                    <Image
                                                        src={product.image}
                                                        alt={product.alt}
                                                        fill
                                                        className='object-contain p-4'
                                                        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                                                    />
                                                </div>
                                                <div className='flex h-[calc(500px-12rem)] flex-col p-4'>
                                                    <div className='title-container mb-2 min-h-[56px]'>
                                                        <h3 className='line-clamp-2 text-lg font-semibold text-black'>
                                                            {product.title}
                                                        </h3>
                                                    </div>
                                                    <div className='price-container mb-4'>
                                                        <p className='text-2xl font-bold text-black'>{product.price}</p>
                                                    </div>
                                                    <div className='mt-auto space-y-2'>
                                                        {product.status === 'QUICK SHIP' ? (
                                                            <div className='flex w-full items-start pl-0'>
                                                                <Image
                                                                    src='https://www.gmesupply.com/Content/Images/quick-ship-g1.svg'
                                                                    width={50}
                                                                    height={50}
                                                                    alt='Shipping icon'
                                                                    className='mr-2'
                                                                />
                                                                <div className='content-wrapper flex flex-col'>
                                                                    <Image
                                                                        src='https://www.gmesupply.com/Content/Images/quick-ship-t1.svg'
                                                                        width={100}
                                                                        height={50}
                                                                        alt='Quick ship'
                                                                        className='mb-1'
                                                                    />
                                                                    {product.delivery && (
                                                                        <span className='text-sm text-green-600'>
                                                                            {product.delivery}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ) : product.status === 'ON BACKORDER' ? (
                                                            <div className='flex flex-wrap items-start'>
                                                                <div className='mt-1 flex flex-col'>
                                                                    <div className='mb-0 text-[15px] font-[750] text-black italic'>
                                                                        ON BACKORDER
                                                                        <i
                                                                            className='fas fa-info mt-1 ml-1 align-top text-xs text-gray-600'
                                                                            title='For more information, please reach out to us at (800) 940-6762'></i>
                                                                    </div>
                                                                    <div className='mb-0 text-[15px] text-gray-600'>
                                                                        Call for availability
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : null}

                                                        <button
                                                            className={`w-full px-4 py-2 text-white transition-colors ${
                                                                product.status === 'ON BACKORDER'
                                                                    ? 'bg-[#6c757d]'
                                                                    : 'bg-[#ce181e]'
                                                            }`}>
                                                            {product.status === 'ON BACKORDER'
                                                                ? 'SELECT FOR BACKORDER'
                                                                : product.status === 'QUICK SHIP'
                                                                  ? 'ADD TO CART'
                                                                  : 'SELECT OPTIONS'}
                                                        </button>
                                                        {product.shipping && (
                                                            <div className='shipping-promo flex items-center justify-center'>
                                                                <span className='text-sm font-bold text-black'>
                                                                    This item ships{' '}
                                                                </span>
                                                                <span className='ml-1 text-sm font-bold text-[#ce181e]'>
                                                                    FREE
                                                                </span>
                                                            </div>
                                                        )}
                                                        {product.code && (
                                                            <div className='shipping-promo flex items-center justify-center'>
                                                                <span className='text-block mb-2 text-sm'>
                                                                    {product.code}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
