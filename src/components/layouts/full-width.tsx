'use client';

import Image from 'next/image';
import { cn } from '@/utils/tw';

const FullWidthLayout = ({
    children,
    bg = 'bg-[#ececec]',
    bgImg,
    height
}: Readonly<{
    children: React.ReactNode;
    bg?: string;
    bgImg?: string;
    height?: string;
}>) => {
    return (
        <div className={cn('w-[calc(100%+11%) px-[5.6%])] relative mx-[-5.5%] overflow-x-hidden', bg, height)}>
            {bgImg && (
                <Image
                    src={bgImg}
                    alt='Background'
                    fill
                    sizes='100vw'
                    className='object-cover md:scale-x-150 md:object-fill md:transition-transform md:duration-500 md:ease-in-out'
                />
            )}
            <div className='relative z-10 w-full'>{children}</div>
        </div>
    );
};

export default FullWidthLayout;
