'use client';

import React, { useRef, useState } from 'react';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import DropdownForProduct from './dropdown';
import QuantityButton from './quantityButton';

const ProductDetailsPage = () => {
    const product = {
        productName: '3M Scotchlok Copper Two Hole Long Barrel Lug',
        productDescription:
            '3M Scotchlok 31100 2 Hole Compression Lug is for use with copper conductors only. The seamless copper construction offers high conductivity and a tin plated finish resists corrosion. It is rated for 35 kV voltage applications. Long barrel ensures a secure fit and offers reliable performance. Barrel has colored stripes that help to indicate the wire range. Suitable for indoor and outdoor applications. Made of copper for good conductivity and tin plating for corrosion resistance. For up to 35 kV applications. UL Listed, CSA Certified and RoHS 2011/65/EU Compliant',
        productPrice: '$148.99 to $699.99',
        productImages: [
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(63).png',
            'https://www.gmesupply.com/media/catalog/product/g/m/gm-90030%20(62).png',
            'https://www.gmesupply.com/c/1024//media/catalog/product/s/t/sterling-ancore-sling-1.jpg',
            'https://www.gmesupply.com/c/1024//media/catalog/product/s/t/sterling-ancore-sling-2.jpg',
            'https://www.gmesupply.com/c/1024//media/catalog/product/s/t/sterling-ancore-sling-3.jpg'
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
        length: '1/2 in',
        specs: {
            product_code: 'C-3M-31130',
            manufacturer: '3M',
            sku: '3M-7000005882',
            dimensions: {
                width: '500 kcmil',
                length: '1/2"'
            },
            weight: 50,
            additional_skus: ['3M-7000031406', '3M-7000031407', '3M-7000031408', '3M-7000031409']
        }
    };

    const [image, setImage] = useState(product.productImages[0]);
    const [selectedWireGauge, setSelectedWireGauge] = useState(product.wireGauge[0]);
    const [showDescription, setShowDescription] = useState(true);
    const [showSpecs, setShowSpecs] = useState(false);
    const [showSpecsSku, setShowSpecsSku] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    const [zoomStyle, setZoomStyle] = useState<any>({});
    const [showZoom, setShowZoom] = useState(false);
    const [direction, setDirection] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const quantityButtonRef = useRef<HTMLDivElement | any>(null);
    const isQuantityButtonVisible = useScrollTrigger(quantityButtonRef);
    const descriptionRef = useRef<HTMLDivElement>(null);

    // Scroll to description when "View More" is clicked
    const handleViewMoreClick = () => {
        setShowDescription(true);
        descriptionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const handleDescriptionClick = () => {
        setShowDescription(!showDescription);
    };
    const handleSpecsClick = () => {
        setShowSpecs(!showSpecs);
    };
    const handleSpecsSkuClick = () => {
        setShowSpecsSku(!showSpecsSku);
    };

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
        <div className='font-sans'>
            {isQuantityButtonVisible && <DropdownForProduct />}
            <div className='fixed top-100 left-[-44] z-20 hidden h-10 w-32 -rotate-90 cursor-pointer justify-center gap-2 bg-[#ce181e] p-2 text-white md:flex'>
                <svg
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z' />
                </svg>
                <p className=''>REVIEWS</p>
            </div>

            <div className='w-full grid-cols-1 p-2 lg:flex lg:grid-cols-2'>
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

                {/* Product Details Section */}
                <div className='invisible-scrollbar h-[calc(100vh-100px)] w-full overflow-y-auto p-2'>
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
                                <p className='cursor-pointer text-sm text-blue-500 hover:text-blue-700'>
                                    Ask a question
                                </p>
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

                    <div className='py-2'>
                        <p className='md:text:md border-b border-black py-4 text-sm font-bold'>
                            Please select an option below
                        </p>
                        <div className='mt-2 py-2'>
                            <span className='mb-2 rounded-lg bg-green-700 p-2 font-bold text-white'>New!</span>
                            <div className='md:text-md py-2 text-sm'>
                                <li>Long barrel ensures a secure fit and offers reliable performance</li>
                                <li>Barrel has colored stripes that help to indicate the wire range</li>
                                <li>Suitable for indoor and outdoor applications</li>
                                <li>Made of copper for good conductivity and tin plating for corrosion resistance</li>
                            </div>
                            <p className='md:text-md cursor-pointer text-sm text-red-500' onClick={handleViewMoreClick}>
                                View More
                            </p>
                        </div>
                    </div>

                    {/* Wire Gauge */}
                    <div className='py-2'>
                        <p className='text-md font-bold md:text-lg'>Wire Gauge*</p>
                        <div className='grid w-70 grid-cols-2 gap-2 lg:w-100 lg:grid-cols-3'>
                            {product?.wireGauge.map((data, index) => (
                                <div
                                    key={index}
                                    className={`md:text-md h-8 w-32 cursor-pointer rounded-full border-2 pt-1 text-center text-sm hover:bg-green-700 hover:text-white ${
                                        selectedWireGauge.value === data.value
                                            ? 'border-green-700 bg-green-700 text-white'
                                            : 'border-green-700'
                                    }`}
                                    onClick={() => setSelectedWireGauge(data)}>
                                    {data?.value}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Length */}
                    <div className='py-2'>
                        <p className='text-md font-bold md:text-lg'>Length*</p>
                        <p className='h-8 w-18 cursor-pointer rounded-full border-2 border-green-700 pt-1 text-center hover:bg-green-700 hover:text-white'>
                            {product?.length}
                        </p>
                    </div>

                    <QuantityButton />

                    {/* Description */}
                    <div
                        ref={quantityButtonRef}
                        className='flex justify-between rounded-b-lg border-b-2 border-red-700 py-2'>
                        <p ref={descriptionRef} className='text-md font-bold md:text-lg'>
                            Description
                        </p>

                        {showDescription ? (
                            <svg
                                className='h-6 w-6 cursor-pointer font-bold text-black'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                onClick={handleDescriptionClick}>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                            </svg>
                        ) : (
                            <svg
                                className='h-6 w-6 cursor-pointer font-bold text-black'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                onClick={handleDescriptionClick}>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                            </svg>
                        )}
                    </div>

                    {showDescription && (
                        <div className='p-2 text-sm md:text-lg'>
                            <p>
                                3M Scotchlok 31100 2 Hole Compression Lug is for use with copper conductors only. The
                                seamless copper construction offers high conductivity and a tin plated finish resists
                                corrosion. It is rated for 35 kV voltage applications.
                            </p>
                            <div className='p-2'>
                                <li>Long barrel ensures a secure fit and offers reliable performance</li>
                                <li>Barrel has colored stripes that help to indicate the wire range</li>
                                <li>Suitable for indoor and outdoor applications</li>
                                <li>Made of copper for good conductivity and tin plating for corrosion resistance</li>
                                <li>For up to 35 kV applications</li>
                                <li>UL Listed, CSA Certified and RoHS 2011/65/EU Compliant</li>
                            </div>
                        </div>
                    )}

                    {/* Specs */}
                    <div className='mt-2 flex justify-between rounded-b-lg border-b-2 border-red-700 py-2'>
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
                                    <h2 className='text black mr-20 text-sm md:text-lg'>
                                        {product?.specs?.manufacturer}
                                    </h2>
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
                                            <p className='text-md p-2 md:text-lg'>
                                                {product?.specs?.dimensions?.width}
                                            </p>
                                        </div>

                                        <div className='flex gap-10 sm:gap-20 md:gap-60'>
                                            <p className='text-md p-2 font-bold md:text-lg'>Length :</p>
                                            <p className='text-md p-2 md:text-lg'>
                                                {product?.specs?.dimensions?.length}
                                            </p>
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
            </div>

            {/* Review Section */}
            <div className='p-2'>
                <h1 className='p-2 text-xl font-bold md:text-2xl'>Reviews</h1>

                <div className='flex gap-10 p-2'>
                    <p
                        className={`text-md cursor-pointer md:text-lg ${activeTab === 1 && 'border-b border-black'}`}
                        onClick={() => setActiveTab(1)}>
                        Reviews
                    </p>
                    <p
                        className={`text-md cursor-pointer md:text-lg ${activeTab === 2 && 'border-b border-black'}`}
                        onClick={() => setActiveTab(2)}>
                        Q&A
                    </p>
                </div>

                {activeTab === 1 ? (
                    <div className='p-2 text-center'>
                        <div className='flex justify-center'>
                            <img
                                src='https://cdn.vectorstock.com/i/1000x1000/89/04/yellow-stars-shining-icons-star-icon-christmas-vector-46558904.webp'
                                alt='Stars'
                                className='h-50 w-50'
                            />
                        </div>
                        <p className='text-md mt-2 font-bold md:text-lg'>We’re looking for stars!</p>
                        <p className='md:text-md mt-2 text-sm text-gray-500'>Let us know what you think</p>
                        <button className='mt-2 cursor-pointer rounded-full bg-black p-2 font-bold text-white'>
                            Be the first to write a review!
                        </button>
                    </div>
                ) : (
                    <div className='p-2 text-center'>
                        <h1 className='text-xl font-bold md:text-2xl'>Questions & Answers</h1>
                        <p className='text-md mt-10 font-bold text-red-500 md:text-lg'>Have a question?</p>
                        <p className='md:text-md mt-2 text-sm text-gray-500'>
                            Be the first to ask something about this product.
                        </p>
                        <button className='mt-2 h-10 w-48 cursor-pointer rounded-full bg-red-700 p-2 font-bold text-white'>
                            Ask a question
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetailsPage;
