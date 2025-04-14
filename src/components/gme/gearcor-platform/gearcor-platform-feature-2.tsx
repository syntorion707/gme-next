import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Feature {
    title: string;
    description: string;
    iconSrc: string;
    link: string;
}

interface FeatureSection2Props {
    features: Feature[];
}

const FeatureSection2: React.FC<FeatureSection2Props> = ({ features }) => {
    return (
        <section className='mx-auto max-w-6xl px-6 py-6 text-center'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
                {features.map((feature, index) => (
                    <Link key={index} href={feature.link} className='flex flex-col items-center'>
                        <Image src={feature.iconSrc} alt={feature.title} width={54} height={54} className='' />
                        <h3 className='text-lg font-semibold text-gray-900'>{feature.title}</h3>
                        <p className='mt-2 text-sm text-gray-600'>{feature.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection2;
