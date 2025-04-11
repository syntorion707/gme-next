import React from 'react';

interface ShortDescriptionProps {
    handleViewMoreClick: () => void;
}

const ShortDescription: React.FC<ShortDescriptionProps> = ({ handleViewMoreClick }) => {
    return (
        <div className='py-2'>
            <p className='md:text:md border-b border-black py-4 text-sm font-bold'>Please select an option below</p>
            <div className='mt-2 py-2'>
                <span className='mb-2 rounded-lg bg-green-700 p-2 font-bold text-white'>New!</span>
                <div className='md:text-md py-2 text-sm'>
                    <li>Long barrel ensures a secure fit and offers reliable performance</li>
                    <li>Barrel has colored stripes that help to indicate the wire range</li>
                    <li>Suitable for indoor and outdoor applications</li>
                    <li>Made of copper for good conductivity and tin plating for corrosion resistance</li>
                </div>
                <p className='md:text-md text-primary cursor-pointer text-sm' onClick={handleViewMoreClick}>
                    View More
                </p>
            </div>
        </div>
    );
};

export default ShortDescription;
