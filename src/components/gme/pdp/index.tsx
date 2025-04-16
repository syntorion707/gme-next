'use client';

import React, { useRef, useState } from 'react';
import { useProduct } from '@/hooks/features/useProducts';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import ProductDescription from './description';
import DropdownForProduct from './dropdown';
import ImageSlider from './image-slider';
import ProductDetails from './product-details';
import ProductDetailsDropdown from './product-details-dropdown';
import QuantityButton from './quantity-button';
import ReviewSection from './review-section';
import ShortDescription from './short-description';
import Specs from './specs';
import WireGauge from './wire-gauge';

const ProductDetailsPage = () => {
    const { product } = useProduct();

    const [showDescription, setShowDescription] = useState(true);

    const quantityButtonRef = useRef<HTMLDivElement | any>(null);
    const isQuantityButtonVisible = useScrollTrigger(quantityButtonRef);
    const descriptionRef = useRef<HTMLDivElement | any>(null);

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
                {product?.productImages && <ImageSlider product={product} />}

                {/* Product Details Section */}
                <div className='invisible-scrollbar h-[calc(100vh-100px)] w-full overflow-y-auto p-2'>
                    <ProductDetails product={product} />

                    <ShortDescription handleViewMoreClick={handleViewMoreClick} />

                    <WireGauge product={product} />

                    <ProductDetailsDropdown />

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
