import Image from 'next/image';
import React from 'react';

interface SafetyGearsSectionProps {
    title: string;
    logos: string[];
}

const SafetyGearsSection: React.FC<SafetyGearsSectionProps> = ({ title, logos }) => {
    return (
        <div className='text-center'>
            <h2 className='text-primary mb-8 text-xl font-bold md:text-4xl'>{title}</h2>
            <div className='mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4 lg:grid-cols-7'>
                {logos.map((logo, index) => (
                    <div key={index} className='flex items-center justify-center p-2'>
                        <Image
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            width={120}
                            height={40}
                            className='h-auto w-full object-contain'
                            style={{ maxWidth: '120px', maxHeight: '40px' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SafetyGearsSection;
