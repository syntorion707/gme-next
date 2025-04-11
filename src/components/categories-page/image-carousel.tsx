import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

const ImageCarousel = () => {
    const images = [
        {
            src: 'https://www.gmesupply.com/images/shop_by_category/Fall_Protection/Sliders/Protecta.jpg',
            alt: 'Protecta'
        },
        {
            src: 'https://www.gmesupply.com/images/shop_by_category/Fall_Protection/Sliders/Harness-Accessories.jpg',
            alt: 'Harness Accessories'
        },
        {
            src: 'https://www.gmesupply.com/images/shop_by_category/Fall_Protection/Sliders/LadSaf-X3.jpg',
            alt: 'LadSaf X3'
        },
        {
            src: 'https://www.gmesupply.com/images/shop_by_category/Fall_Protection/Sliders/WestFall-Skyloc.jpg',
            alt: 'WestFall Skyloc'
        },
        {
            src: 'https://www.gmesupply.com/images/shop_by_category/Fall_Protection/Sliders/Strata-Harness.jpg',
            alt: 'Strata-Harness'
        }
    ];

    const infiniteImages = useMemo(() => {
        if (images.length < 2) return images;

        return [images[images.length - 1], ...images, images[0]];
    }, [images]);

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

    const totalSlides = infiniteImages.length;

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex === 0) {
            setIsTransitionEnabled(false);
            setCurrentIndex(totalSlides - 2);
        } else if (currentIndex === totalSlides - 1) {
            setIsTransitionEnabled(false);
            setCurrentIndex(1);
        }
    }, [currentIndex, totalSlides]);

    useEffect(() => {
        if (!isTransitionEnabled) {
            const timer = setTimeout(() => {
                setIsTransitionEnabled(true);
            }, 10);

            return () => clearTimeout(timer);
        }
    }, [isTransitionEnabled]);

    const nextSlide = useCallback(() => {
        if (isTransitionEnabled) {
            setCurrentIndex((prev: number) => (prev + 1) % totalSlides);
        }
    }, [totalSlides, isTransitionEnabled]);

    const prevSlide = useCallback(() => {
        if (isTransitionEnabled) {
            setCurrentIndex((prev: number) => (prev - 1 + totalSlides) % totalSlides);
        }
    }, [totalSlides, isTransitionEnabled]);

    useEffect(() => {
        if (isPaused || !isTransitionEnabled) return;
        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide, isTransitionEnabled]);

    return (
        <div>
            <div
                className='relative h-[150px] w-full overflow-hidden md:h-[250px] lg:h-[350px] lg:w-full'
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                <div
                    className='relative flex h-full w-full transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]'
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitionEnabled ? 'transform 700ms cubic-bezier(0.4,0,0.2,1)' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}>
                    {infiniteImages.map((image, index) => (
                        <Link key={index} href='/plp' className='relative block h-full min-w-full'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className='object-fill'
                                priority={index === currentIndex}
                                sizes='(max-width: 768px) 100vw, 60vw'
                            />
                        </Link>
                    ))}
                </div>

                {/* Indicators */}
                <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (isTransitionEnabled) {
                                    setCurrentIndex(index + 1);
                                }
                            }}
                            className={`h-1 w-4 transition-all duration-300 md:w-8 ${
                                currentIndex === index + 1 ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className='absolute top-1/2 left-2 z-30 -translate-y-1/2 transform cursor-pointer p-2 text-xl text-white/80 transition-colors duration-300 hover:text-white md:p-4 md:text-3xl'
                    onClick={prevSlide}
                    aria-label='Previous slide'>
                    &#10094;
                </button>
                <button
                    className='absolute top-1/2 right-2 z-30 -translate-y-1/2 transform cursor-pointer p-2 text-xl text-white/80 transition-colors duration-300 hover:text-white md:p-4 md:text-3xl'
                    onClick={nextSlide}
                    aria-label='Next slide'>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
