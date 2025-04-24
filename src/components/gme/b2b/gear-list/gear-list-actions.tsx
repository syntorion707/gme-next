'use client';

import { RefObject, useState } from 'react';
import { GearListOptionGroup } from '@/types/gearList';

interface GearListActionsProps {
    onAddToCart: () => void;
    onDelete: () => void;
    showAddGearListOptions: boolean;
    onAddGearListToggle: () => void;
    gearListRef?: RefObject<HTMLDivElement | null>;
}

const gearListOptions: GearListOptionGroup[] = [
    {
        group: 'Your custom gear lists',
        options: ['1 - Master Quote', "Charlie's List", 'CUSTOM KIT WITH OPTIONS', 'Ecom Testing', 'Favorites']
    }
];

const GearListActions = ({
    onAddToCart,
    onDelete,
    showAddGearListOptions,
    onAddGearListToggle,
    gearListRef
}: GearListActionsProps) => {
    const [selectedAddGearList, setSelectedAddGearList] = useState('');

    return (
        <>
            <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-between'>
                <div>Showing 1 to 8 of 8 entries</div>
                <div className='flex space-x-2'>
                    <button className='hover:text-primary cursor-pointer border-none px-3 py-1'>Previous</button>
                    <p className='text-primary border-none px-3 py-1'>1</p>
                    <button className='hover:text-primary cursor-pointer border-none px-3 py-1'>Next</button>
                </div>
            </div>
            <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-end'>
                <div className='flex space-x-2'>
                    <button
                        className='bg-primary hover:bg-primary-dark cursor-pointer rounded-sm px-4 py-1.5 font-bold whitespace-nowrap text-white'
                        onClick={onAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-2 text-sm md:flex-row md:justify-between'>
                <div>
                    <button
                        className='bg-primary hover:bg-primary-dark cursor-pointer rounded-sm px-4 py-1.5 font-bold whitespace-nowrap text-white'
                        onClick={onDelete}>
                        Delete This List
                    </button>
                </div>

                <span className='relative' ref={gearListRef}>
                    <button
                        className={`flex cursor-pointer items-center rounded-sm p-1.5 font-bold whitespace-nowrap text-white ${
                            showAddGearListOptions ? 'bg-[#0062cc]' : 'bg-primary'
                        }`}
                        onClick={() => onAddGearListToggle()}>
                        Copy to List...
                        <svg
                            className={`ml-1 h-4 w-4 transition-transform ${showAddGearListOptions ? 'rotate-180' : ''}`}
                            viewBox='0 0 24 24'
                            fill='white'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12 17L5 9H19L12 17Z' />
                        </svg>
                    </button>

                    {showAddGearListOptions && (
                        <div className='absolute bottom-full left-[-70px] z-10 mb-1 w-64 rounded-md border border-gray-200 bg-white py-1 shadow-lg md:right-1 md:left-[-131px]'>
                            {gearListOptions.map((group, groupIndex) => (
                                <div key={groupIndex}>
                                    {!group?.isRecommended &&
                                        group.options.map((option, optionIndex) => (
                                            <div
                                                key={optionIndex}
                                                className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                onClick={() => {
                                                    setSelectedAddGearList(option);
                                                    onAddGearListToggle();
                                                }}>
                                                {option}
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    )}
                </span>
            </div>
        </>
    );
};

export default GearListActions;
