import React from 'react';

type BannerButton = {
    label: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary';
};

interface BannerSectionProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
    imageHeight?: string; // e.g. "500px", "400px", etc.
    buttons: BannerButton[];
}

const BannerSection: React.FC<BannerSectionProps> = ({
    backgroundImage,
    title,
    subtitle,
    imageHeight = '500px',
    buttons
}) => {
    return (
        <section
            className='relative flex items-center bg-cover bg-center text-white'
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                minHeight: imageHeight
            }}>
            <div className='w-5xl px-6 pt-20 pb-16 md:px-10 lg:px-20'>
                <h1 className='mb-6 text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl'>
                    {title}
                    {subtitle && (
                        <>
                            <br />
                            {subtitle}
                        </>
                    )}
                </h1>
                <div className='mt-10 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center'>
                    {buttons.map((btn, idx) =>
                        btn.href ? (
                            <a
                                key={idx}
                                href={btn.href}
                                className={`${
                                    btn.variant === 'primary' ? 'bg-red-600 text-white' : 'bg-gray-200 text-red-700'
                                } w-full cursor-pointer rounded px-6 py-2 text-center font-semibold shadow sm:w-48`}>
                                {btn.label}
                            </a>
                        ) : (
                            <button
                                key={idx}
                                onClick={btn.onClick}
                                className={`${
                                    btn.variant === 'primary' ? 'bg-red-600 text-white' : 'bg-gray-200 text-red-700'
                                } w-full cursor-pointer rounded px-6 py-2 font-semibold shadow sm:w-48`}>
                                {btn.label}
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
