import React, { useState } from 'react';
import { ProductDetailsTypes } from '@/types/common';

interface zoomStyleType {
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    transform?: string;
}

const ImageSlider: React.FC<ProductDetailsTypes> = ({ product }) => {
    const [image, setImage] = useState(product.productImages[0]);
    const [zoomStyle, setZoomStyle] = useState<zoomStyleType>({});
    const [showZoom, setShowZoom] = useState(false);
    const [direction, setDirection] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!image) return;

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({
            backgroundImage: `url("${image}")`,
            backgroundSize: '300%',
            backgroundPosition: `${x.toFixed(2)}% ${y.toFixed(2)}%`,
            backgroundRepeat: 'no-repeat'
        });

        setShowZoom(true);
    };

    const handleMouseLeave = () => {
        setShowZoom(false);
        setZoomStyle({
            transform: 'scale(1)'
        });
    };

    const handleThumbnailClick = (img: string) => {
        if (!product?.productImages) return;

        const newIndex = product.productImages.indexOf(img);
        if (newIndex === -1) return;

        setDirection('');

        setTimeout(() => {
            const newDirection = newIndex > currentIndex ? 'right-to-left' : 'left-to-right';
            setCurrentIndex(newIndex);
            setImage(img);
            setDirection(newDirection);
        }, 10);
    };

    const handleNextClick = () => {
        if (!product?.productImages) return;

        const newIndex = (currentIndex + 1) % product.productImages.length;
        setCurrentIndex(newIndex);
        setImage(product.productImages[newIndex]);
        setDirection('right-to-left');
    };

    const handlePrevClick = () => {
        if (!product?.productImages) return;

        const newIndex = (currentIndex - 1 + product.productImages.length) % product.productImages.length;
        setCurrentIndex(newIndex);
        setImage(product.productImages[newIndex]);
        setDirection('left-to-right');
    };

    const [isFullScreen, setIsFullScreen] = useState(false);

    const openFullScreen = () => {
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        setIsFullScreen(false);
    };

    return (
        <div className='flex h-full w-full flex-col gap-2 p-2 md:flex-row'>
            <div className='flex h-auto w-full flex-row gap-2 overflow-x-auto md:h-full md:w-[25%] md:flex-col md:overflow-y-auto'>
                {product?.productImages?.map((image, index) => {
                    const imageIndex = index;
                    const isActive = imageIndex === currentIndex;

                    return (
                        <div
                            key={imageIndex}
                            className='hidden h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden border border-gray-100 md:block md:h-24 md:w-auto'
                            onClick={() => handleThumbnailClick(image)}>
                            <img
                                src={image}
                                alt={`${product.productName} thumbnail ${imageIndex}`}
                                className={`h-full w-full object-cover transition-opacity ${
                                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                                }`}
                            />
                        </div>
                    );
                })}
            </div>

            <div className='relative h-full w-full md:w-[75%]'>
                <div
                    className='relative h-64 w-full overflow-hidden border border-gray-100 sm:h-80 md:h-[520px]'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}>
                    <img
                        src={image}
                        alt={product?.productName}
                        className={`h-full w-full cursor-pointer object-cover transition-transform duration-300 ${
                            direction === 'right-to-left'
                                ? 'slide-in-from-right'
                                : direction === 'left-to-right'
                                  ? 'slide-in-from-left'
                                  : ''
                        }`}
                        style={zoomStyle}
                        key={`${image}-${currentIndex}`}
                        onClick={openFullScreen}
                    />

                    {/* Full Screen Overlay */}
                    {isFullScreen && (
                        <div
                            className='bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-white'
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={closeFullScreen}
                                className='text-md absolute top-4 left-4 flex h-10 w-20 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-black transition-colors'
                                aria-label='Close image viewer'>
                                close
                            </button>

                            <div className='p-4'>
                                <img
                                    src={image}
                                    alt={product?.productName}
                                    className='object-fit h-100 w-100 md:h-200 md:w-200'
                                />
                            </div>
                        </div>
                    )}

                    {/* Navigation arrows */}
                    <div className='absolute top-1/2 flex w-full -translate-y-1/2 cursor-pointer justify-between gap-4 px-4'>
                        <svg
                            className='h-8 w-8 rounded-full bg-white/80 p-1 font-bold text-gray-700'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            onClick={handlePrevClick}>
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <polyline points='15 6 9 12 15 18' />
                        </svg>
                        <svg
                            className='h-8 w-8 rounded-full bg-white/80 p-1 font-bold text-gray-700'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            onClick={handleNextClick}>
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <polyline points='9 6 15 12 9 18' />
                        </svg>
                    </div>
                </div>

                {/* Zoom preview - hidden on mobile */}
                {!isFullScreen && showZoom && (
                    <div
                        className='absolute top-65 z-50 ml-2 hidden h-50 w-90 border border-gray-200 bg-white shadow-md shadow-black md:top-0 md:left-full md:block md:h-[520px] md:w-[500px]'
                        style={{
                            backgroundImage: `url("${image}")`,
                            backgroundSize: zoomStyle.backgroundSize,
                            backgroundPosition: zoomStyle.backgroundPosition,
                            backgroundRepeat: zoomStyle.backgroundRepeat
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default ImageSlider;
