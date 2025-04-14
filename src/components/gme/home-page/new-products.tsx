'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const distance = touchStartX.current - touchEndX.current;
        const threshold = 50;
        if (distance > threshold) {
            nextSlideProduct();
        } else if (distance < -threshold) {
            prevSlideProduct();
        }
    };

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

    const maxIndex = Math.max(products.length - slidesToShow, 0);

    const nextSlideProduct = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlideProduct = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        if (isPaused || products.length <= slidesToShow) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, products.length, slidesToShow, maxIndex]);

    return (
        <div
            className='mt-6 flex flex-col items-center bg-[#ECECEC] py-8'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <span className='border-primary w-full border-b-2 p-2 text-center text-2xl font-bold uppercase md:mb-8 md:text-3xl'>
                What's <span className='text-primary'>New</span>
            </span>

            {/* External Nav Buttons - only visible on desktop */}
            <div className='hidden w-full justify-between px-4 lg:flex'>
                <button
                    onClick={prevSlideProduct}
                    className='text-4xl text-white/50 transition-colors duration-300 hover:text-white disabled:opacity-50'
                    disabled={currentIndex === 0}>
                    &#10094;
                </button>
                <button
                    onClick={nextSlideProduct}
                    className='text-4xl text-white/50 transition-colors duration-300 hover:text-white disabled:opacity-50'
                    disabled={currentIndex >= maxIndex}>
                    &#10095;
                </button>
            </div>

            <div
                className='relative w-full overflow-hidden'
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
                <div className='w-full overflow-hidden'>
                    <div
                        ref={trackRef}
                        className='flex gap-8 px-4 transition-transform duration-500 ease-in-out'
                        style={{
                            transform: `translateX(-${(100 / products.length) * currentIndex}%)`,
                            width: `${(100 / slidesToShow) * products.length}%`
                        }}>
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className='relative h-[520px] min-w-0 flex-shrink-0 grow basis-0 bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
                                style={{ width: `${100 / slidesToShow}%` }}>
                                <div className='bg-primary absolute top-0 left-0 px-3 py-1 text-sm font-bold text-white'>
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
                                                product.status === 'ON BACKORDER' ? 'bg-[#6c757d]' : 'bg-primary'
                                            }`}>
                                            {product.status === 'ON BACKORDER'
                                                ? 'SELECT FOR BACKORDER'
                                                : product.status === 'QUICK SHIP'
                                                  ? 'ADD TO CART'
                                                  : 'SELECT OPTIONS'}
                                        </button>
                                        {product.shipping && (
                                            <div className='shipping-promo flex items-center justify-center'>
                                                <span className='text-sm font-bold text-black'>This item ships </span>
                                                <span className='text-primary ml-1 text-sm font-bold'>FREE</span>
                                            </div>
                                        )}
                                        {product.code && (
                                            <div className='shipping-promo flex items-center justify-center'>
                                                <span className='text-block mb-2 text-sm'>{product.code}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
