import React from 'react';
import { FullWidthLayout } from '@/components/layouts';

interface ButtonProps {
    label: string;
    bgColor?: string;
    textColor?: string;
}

interface GearcorPlatformBannerProps {
    bannerData: {
        backgroundImage: string;
        title: string;
        subtitle: string;
        height?: string;
        titleColor?: string;
        subtitleColor?: string;
        primaryButton?: ButtonProps;
        secondaryButton?: ButtonProps;
        RightContent?: React.ReactNode;
    };
}

const GearcorPlatformBanner: React.FC<GearcorPlatformBannerProps> = ({ bannerData }) => {
    const {
        backgroundImage,
        title,
        subtitle,
        height = 'h-auto md:h-[385px]',
        titleColor = 'text-black',
        subtitleColor = 'text-black',
        primaryButton,
        secondaryButton,
        RightContent
    } = bannerData;

    return (
        <FullWidthLayout bg='' bgImg={backgroundImage} height={height}>
            <div className='w-full px-4 pt-8 sm:px-6 md:px-[5%] md:pt-12'>
                <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
                    {/* Left Content */}
                    <div className=''>
                        <div className={`${titleColor} mb-2 text-2xl text-[32px] font-normal text-shadow-lg/30`}>
                            {title}
                        </div>
                        <div className={`${subtitleColor} mb-4 text-2xl text-[32px] font-normal text-shadow-lg/30`}>
                            {subtitle}
                        </div>
                        <div className='flex flex-col justify-start gap-4 pt-4 md:pt-14 lg:flex-row lg:gap-6 lg:pt-10'>
                            {primaryButton && (
                                <button
                                    className={`${
                                        primaryButton.bgColor || 'bg-primary'
                                    } ${primaryButton.textColor || 'text-white'} w-full rounded-md px-6 py-2 font-semibold lg:w-58`}>
                                    {primaryButton.label}
                                </button>
                            )}
                            {secondaryButton && (
                                <button
                                    className={`${
                                        secondaryButton.bgColor || 'bg-[#d3d3d3]'
                                    } ${secondaryButton.textColor || 'text-[#369741]'} w-full rounded-md px-6 py-2 font-semibold lg:w-58`}>
                                    {secondaryButton.label}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className='w-full'>{RightContent}</div>
                </div>
            </div>
        </FullWidthLayout>
    );
};

export default GearcorPlatformBanner;
