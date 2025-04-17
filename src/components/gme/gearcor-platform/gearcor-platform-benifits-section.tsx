// components/BenefitsSection.tsx
import React from 'react';

interface BenefitSection {
    title: string;
    items: string[];
}

interface BenefitsSectionProps {
    benefits: BenefitSection[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => (
    <div className='w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12'>
            {benefits.map((section, index) => (
                <div key={index} className=''>
                    <h2 className='text-primary mb-6 text-xl font-bold md:text-2xl'>{section.title}</h2>
                    <ul className='space-y-3'>
                        {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className='flex items-start text-gray-700'>
                                <i className='fas fa-check pr-3 text-2xl'></i>
                                <span className='text-base'>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);
