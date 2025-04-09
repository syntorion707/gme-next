import React from 'react';

interface ProductDescriptionProps {
    showDescription: boolean;
    handleDescriptionClick: () => void;
    quantityButtonRef: React.RefObject<HTMLDivElement>;
    descriptionRef: React.RefObject<HTMLDivElement>;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
    showDescription,
    handleDescriptionClick,
    quantityButtonRef,
    descriptionRef
}) => {
    return (
        <div>
            <div ref={quantityButtonRef} className='border-primary flex justify-between rounded-b-lg border-b-2 py-2'>
                <p ref={descriptionRef} className='text-md font-bold md:text-lg'>
                    Description
                </p>

                {showDescription ? (
                    <svg
                        className='h-6 w-6 cursor-pointer font-bold text-black'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        onClick={handleDescriptionClick}>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                ) : (
                    <svg
                        className='h-6 w-6 cursor-pointer font-bold text-black'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        onClick={handleDescriptionClick}>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                    </svg>
                )}
            </div>

            {showDescription && (
                <div className='p-2 text-sm md:text-lg'>
                    <p>
                        3M Scotchlok 31100 2 Hole Compression Lug is for use with copper conductors only. The seamless
                        copper construction offers high conductivity and a tin plated finish resists corrosion. It is
                        rated for 35 kV voltage applications.
                    </p>
                    <div className='p-2'>
                        <li>Long barrel ensures a secure fit and offers reliable performance</li>
                        <li>Barrel has colored stripes that help to indicate the wire range</li>
                        <li>Suitable for indoor and outdoor applications</li>
                        <li>Made of copper for good conductivity and tin plating for corrosion resistance</li>
                        <li>For up to 35 kV applications</li>
                        <li>UL Listed, CSA Certified and RoHS 2011/65/EU Compliant</li>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDescription;
