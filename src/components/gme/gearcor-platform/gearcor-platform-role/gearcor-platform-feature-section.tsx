import Link from 'next/link';
import React from 'react';

interface FeatureCard {
    title: string;
    description: string;
    iconClass?: string;
    link: string;
}

interface FeaturesSectionProps {
    features: FeatureCard[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => (
    <div className='mx-auto w-full max-w-7xl text-center'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3'>
            {features.map((feature, index) => (
                <Link
                    key={index}
                    href={feature?.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-col items-center text-center'>
                    {feature.iconClass && (
                        <div className='mb-4'>
                            <i className={`${feature.iconClass} text-primary`}></i>
                        </div>
                    )}
                    <h3 className='mb-2 text-xl font-semibold text-gray-900'>{feature.title}</h3>
                    <p className='text-gray-600'>{feature.description}</p>
                </Link>
            ))}
        </div>
    </div>
);
