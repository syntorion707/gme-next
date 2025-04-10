import Image from 'next/image';
import React from 'react';

interface BrandsProps {
    onClose: () => void;
}

const FeaturedBrandsModal: React.FC<BrandsProps> = ({ onClose }) => {
    const brands = [
        { name: '3M', logo: 'https://www.gmesupply.com/media/catalog/product/3/m/3M-Logo.jpg' },
        { name: 'Buckingham', logo: 'https://www.gmesupply.com/media/catalog/product/b/u/buckLogo_Final.png' },
        { name: 'Cablematic', logo: 'https://www.gmesupply.com/media/catalog/product/c/a/CablematicLOGO.png' },
        { name: 'CablePrep', logo: 'https://www.gmesupply.com/media/catalog/product/c/a/cable-prep.jpg' },
        {
            name: '3M Fall Protection',
            logo: 'https://www.gmesupply.com/media/catalog/product/3/m/3m_dbi_sala_h_lockup_rgb.png'
        },
        { name: 'DeWalt', logo: 'https://www.gmesupply.com/media/catalog/product/d/e/dewalt_logo_4.png' },
        { name: 'Elk River', logo: 'https://www.gmesupply.com/media/catalog/product/e/l/elk-river-logo.jpg' },
        { name: 'Ergodyne', logo: 'https://www.gmesupply.com/media/catalog/product/e/r/ergodyne2.png' },
        { name: 'FallTech', logo: 'https://www.gmesupply.com/media/catalog/product/f/a/FallTech_logo_rgb.png' },
        { name: 'Field Sense', logo: 'https://www.gmesupply.com/media/catalog/product/f/i/FieldSENSE%20Logo%201.jpg' },
        { name: 'Fluke', logo: 'https://www.gmesupply.com/media/catalog/product/f/l/fluke-logo.jpg' },
        {
            name: 'Guardian',
            logo: 'https://www.gmesupply.com/media/catalog/product/g/u/Guardian-Master-Logo-Color.jpg'
        },
        { name: 'INNO', logo: 'https://www.gmesupply.com/media/catalog/product/l/o/logo_inno-300x111.jpg' },
        { name: 'Jameson', logo: 'https://www.gmesupply.com/media/catalog/product/l/o/logo-jameson.png' },
        {
            name: 'Jonard Tools',
            logo: 'https://www.gmesupply.com/media/catalog/product/j/o/jonard-header-short-logo.png'
        },
        { name: 'Kenwood', logo: 'https://www.gmesupply.com/media/catalog/product/k/e/kenwood.jpg' },
        {
            name: 'Klein Tools',
            logo: 'https://www.gmesupply.com/media/catalog/product/k/l/KleinStacked-Official-No-Tagline.png'
        },
        { name: 'LiftAll', logo: 'https://www.gmesupply.com/media/catalog/product/d/o/download_24.jpg' },
        { name: 'Little Giant', logo: 'https://www.gmesupply.com/media/catalog/product/l/i/Little-Giant.jpg' },
        { name: 'Makita', logo: 'https://www.gmesupply.com/media/catalog/product/m/a/Makita.jpg' },
        {
            name: 'Honey Well',
            logo: 'https://www.gmesupply.com/media/catalog/product/h/o/honeywell_miller_logo_1_3.jpg'
        },
        { name: 'Miller', logo: 'https://www.gmesupply.com/media/catalog/product/m/i/Miller_FiberLOGO.png' },
        { name: 'Milwaukee', logo: 'https://www.gmesupply.com/media/catalog/product/m/i/milwaukee_logo.svg.png' },
        { name: 'Odm', logo: 'https://www.gmesupply.com/media/catalog/product/l/o/logo-for-website-id2_1.png' },
        {
            name: 'Petzl',
            logo: 'https://www.gmesupply.com/media/catalog/product/p/e/petzl-logo-84194ccde5-seeklogo.com.png'
        },
        { name: 'Pip', logo: 'https://www.gmesupply.com/media/catalog/product/p/i/pip-logo-900.jpg' },
        { name: 'Radianz', logo: 'https://www.gmesupply.com/media/catalog/product/r/a/radians_logo_4.jpg' },
        { name: 'Rock Exotica', logo: 'https://www.gmesupply.com/media/catalog/product/r/o/rock-exotica-logo-2.jpg' },
        { name: 'Skylotec', logo: 'https://www.gmesupply.com/media/catalog/product/s/k/Skylotec-Logo.jpg' },
        {
            name: 'Sterling',
            logo: 'https://www.gmesupply.com/media/catalog/product/s/t/sterling_2015_rgb_full_horiz_2.jpg'
        },
        { name: 'Werner', logo: 'https://www.gmesupply.com/media/catalog/product/w/e/werner.jpg' },
        { name: 'West Fall Pro', logo: 'https://www.gmesupply.com/media/catalog/product/w/e/westfall-pro.jpg' }
    ];

    return (
        <div className='fixed inset-0 top-29 z-50 bg-black/50' onClick={onClose}>
            <div className='relative' onClick={(e) => e.stopPropagation()}>
                <div className='absolute max-h-[600px] w-full overflow-y-auto bg-gray-100 p-2 md:h-[400px] md:w-[75%] lg:h-[550px] 2xl:w-[100%]'>
                    <div className='border-primary flex items-center justify-between border-b-2 pb-2'>
                        <h2 className='text-lg font-bold md:text-xl'>Featured Brands</h2>
                        <button onClick={onClose}>
                            <svg
                                className='h-4 w-4 cursor-pointer text-black'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='4'
                                viewBox='0 0 24 24'
                                strokeLinecap='round'
                                strokeLinejoin='round'>
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <line x1='18' y1='6' x2='6' y2='18' />
                                <line x1='6' y1='6' x2='18' y2='18' />
                            </svg>
                        </button>
                    </div>

                    <div className='mt-4'>
                        <h3 className='text-primary text-md mb-4 cursor-pointer font-semibold md:text-lg'>
                            Shop All Brands
                        </h3>

                        <div className='grid max-h-[400px] w-[95%] grid-cols-3 gap-3 overflow-y-auto pr-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
                            {brands.map((brand, index) => (
                                <div key={index} className='flex h-35 w-full items-center justify-center bg-white p-2'>
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        width={80}
                                        height={80}
                                        className='max-h-16 object-contain'
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='my-4'>
                            <h3 className='text-primary text-md cursor-pointer text-right font-semibold md:text-lg'>
                                Shop All Brands
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBrandsModal;
