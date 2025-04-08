'use client';

import React, { useRef, useState } from 'react';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import ProductDescription from './description';
import DropdownForProduct from './dropdown';
import ImageSlider from './imageSlider';
import ProductDetails from './productDetails';
import QuantityButton from './quantityButton';
import ReviewSection from './reviewSection';
import ShortDescription from './shortDescription';
import Specs from './specs';
import WireGauge from './wireGauge';

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

    const [showDescription, setShowDescription] = useState(true);

    const quantityButtonRef = useRef<HTMLDivElement | any>(null);
    const isQuantityButtonVisible = useScrollTrigger(quantityButtonRef);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const handleDescriptionClick = () => {
        setShowDescription(!showDescription);
    };

    // Scroll to description when "View More" is clicked
    const handleViewMoreClick = () => {
        setShowDescription(true);
        descriptionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
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
                {/* Image Slider Section */}
                <ImageSlider product={product} />

                {/* Product Details Section */}
                <div className='invisible-scrollbar h-[calc(100vh-100px)] w-full overflow-y-auto p-2'>
                    <ProductDetails product={product} />

                    <ShortDescription handleViewMoreClick={handleViewMoreClick} />

                    <WireGauge product={product} />

                    <QuantityButton />

                    <ProductDescription
                        showDescription={showDescription}
                        handleDescriptionClick={handleDescriptionClick}
                        quantityButtonRef={quantityButtonRef}
                        descriptionRef={descriptionRef}
                    />

                    <Specs product={product} />
                </div>
            </div>

            {/* Review Section */}

            <ReviewSection />
        </div>
    );
};

export default ProductDetailsPage;
