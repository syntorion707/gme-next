'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface ImageData {
    src: string;
    alt: string;
    href: string;
}

interface BannerData {
    src: string;
    alt: string;
    link: string;
    text: string;
}

interface HeroCarouselProps {
    images: ImageData[];
    banners: BannerData[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, banners }) => {
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
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }
    }, [totalSlides, isTransitionEnabled]);

    const prevSlide = useCallback(() => {
        if (isTransitionEnabled) {
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
    }, [totalSlides, isTransitionEnabled]);

    useEffect(() => {
        if (isPaused || !isTransitionEnabled) return;
        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide, isTransitionEnabled]);

    return (
        <div className='m-2 md:m-4'>
            <div className='flex w-full flex-col gap-4 md:flex-row'>
                <div
                    className='relative h-[300px] w-full overflow-hidden sm:h-[350px] md:h-[470px] md:w-[60%]'
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
                        className='absolute top-1/2 left-2 z-30 -translate-y-1/2 transform p-2 text-xl text-white/80 transition-colors duration-300 hover:text-white md:p-4 md:text-3xl'
                        onClick={prevSlide}
                        aria-label='Previous slide'>
                        &#10094;
                    </button>
                    <button
                        className='absolute top-1/2 right-2 z-30 -translate-y-1/2 transform p-2 text-xl text-white/80 transition-colors duration-300 hover:text-white md:p-4 md:text-3xl'
                        onClick={nextSlide}
                        aria-label='Next slide'>
                        &#10095;
                    </button>
                </div>

                {/* Banners section */}
                <div className='flex w-full flex-col gap-4 md:w-[40%]'>
                    {banners.map((banner, index) => (
                        <div key={index} className='flex h-full flex-col items-center'>
                            <Link href={banner.link} className='h-full w-full'>
                                <div className='relative h-[140px] w-full md:h-[210px]'>
                                    <Image
                                        src={banner.src}
                                        alt={banner.alt}
                                        fill
                                        className='object-fill'
                                        sizes='(max-width: 768px) 100vw, 40vw'
                                    />
                                </div>
                                <div className='mt-2 w-full text-start'>
                                    <p className='px-2 text-sm text-black hover:text-red-500 md:text-lg'>
                                        {banner.text}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
