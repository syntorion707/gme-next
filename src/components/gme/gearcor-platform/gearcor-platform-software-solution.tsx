import Image from 'next/image';
import React from 'react';

interface SoftwareSolutionData {
    title: string;
    description: string[];
    imageSrc: string;
    imageAlt: string;
}

interface SoftwareSolutionsProps {
    softwareSolutionData: SoftwareSolutionData;
}

const SoftwareSolutionsSection: React.FC<SoftwareSolutionsProps> = ({
    softwareSolutionData: { title, description = [], imageSrc, imageAlt }
}) => {
    return (
        <section className='px-6 py-16'>
            <div className='max-w-9xl grid grid-cols-1 gap-8 md:grid-cols-[9fr_1fr]'>
                {/* Text Content - 80% */}
                <div className='space-y-6'>
                    <h2 className='text-sm font-bold text-red-600 md:text-2xl'>{title}</h2>
                    <div className='space-y-5'>
                        {description.map((paragraph, index) => (
                            <p key={index} className='text-base leading-relaxed text-gray-800'>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Image - 20% */}
                <div className='flex justify-start md:justify-center'>
                    <div className='relative h-[230px] w-[220px] md:h-[150px]'>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className='object-fill'
                            sizes='(max-width: 768px) 100vw, 20vw'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareSolutionsSection;
