import React from 'react';

interface SectionProps {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4?: string;
    image: string;
    reverse?: boolean;
    imageSize?: string;
    imageShadow?: string;
    contentBg?: string;
}

const Section: React.FC<SectionProps> = ({
    title,
    p1,
    p2,
    p3,
    p4,
    image,
    reverse = false,
    imageSize = 'h-auto',
    imageShadow = 'shadow',
    contentBg = 'bg-white'
}) => {
    return (
        <section className={`px-6 py-14 md:px-10 lg:px-20 ${contentBg}`}>
            {/* Centered title above entire section */}
            <div className='mb-10 text-center'>
                <h2 className='inline-block border-b-2 border-red-600 pb-2 text-2xl font-bold text-black md:text-3xl'>
                    {title}
                </h2>
            </div>

            <div className={`flex flex-col items-center gap-10 lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text content */}
                <div className='w-full space-y-4 text-sm text-gray-700 md:text-base lg:w-1/2'>
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                    {p4 && <p>{p4}</p>}
                </div>

                {/* Image */}
                <div className='w-full align-top lg:w-1/2'>
                    <img
                        src={image}
                        alt={title}
                        className={`w-full rounded ${imageSize} `}
                        style={{ boxShadow: '0 30px 80px rgba(0, 0, 0, 0.2)' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Section;
