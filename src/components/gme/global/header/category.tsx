'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import FeaturedBrandsModal from '@/components/categories-page/featured-brands';

const Category = () => {
    const categoryLinks = [
        { name: 'Featured Brands' },
        { name: 'Fall Protection' },
        { name: 'PPE & Work Wear' },
        { name: 'Lifting & Rigging' },
        { name: 'Rope' },
        { name: 'Rescue' },
        { name: 'First Aid' },
        { name: 'Tools' },
        { name: 'Bags, Buckets, & Storage' },
        { name: 'Devices & Testing' }
    ];

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className='border-primary hidden cursor-pointer justify-around gap-4 border-t-2 bg-black px-[5%] py-2 text-white md:flex'>
                {categoryLinks.map((category, index) =>
                    index === 0 ? (
                        <div key={index} onClick={() => setShowModal(true)} className='cursor-pointer'>
                            <p className='md:text-md text-primary text-sm lg:text-lg'>{category?.name}</p>
                        </div>
                    ) : (
                        <Link
                            href={'/category'}
                            key={index}
                            className={`${index > 5 ? 'hidden md:hidden lg:block' : ''}`}>
                            <div className='cursor-pointer'>
                                <p className='md:text-md text-sm lg:text-lg'>{category?.name}</p>
                            </div>
                        </Link>
                    )
                )}
            </div>
            {showModal && <FeaturedBrandsModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Category;
