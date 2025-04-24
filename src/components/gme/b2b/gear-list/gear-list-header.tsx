'use client';

import { RefObject, useRef } from 'react';
import { GearList, GearListOptionGroup } from '@/types/gearList';

interface GearListHeaderProps {
    title: string;
    selectedGearList: string;
    showGearListOptions: boolean;
    onGearListToggle: () => void;
    onGearListSelect: (option: string) => void;
    gearList: GearList[];
    gearListRef?: RefObject<HTMLDivElement | null>;
    dropdownRef?: RefObject<HTMLDivElement | null>;
}

const GearListHeader = ({
    title,
    selectedGearList,
    showGearListOptions,
    onGearListToggle,
    onGearListSelect,
    gearListRef,
    dropdownRef,
    gearList
}: GearListHeaderProps) => {
    return (
        <>
            <p className='text-primary pt-2 text-center text-2xl font-semibold uppercase md:mb-2 md:pt-0 md:text-left'>
                {title}
            </p>
            <div className='mb-4 justify-between md:flex'>
                <div className='flex items-center justify-start pb-1'>
                    <span className='font-semibold'>Gear List: </span>
                    <div className='relative pl-2' ref={gearListRef}>
                        <button
                            className={`flex cursor-pointer items-center rounded-sm p-1.5 font-bold whitespace-nowrap text-white ${
                                showGearListOptions ? 'bg-[#0062cc]' : 'bg-primary'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                onGearListToggle();
                            }}>
                            {selectedGearList}
                            <svg
                                className={`ml-1 h-4 w-4 transition-transform ${showGearListOptions ? 'rotate-180' : ''}`}
                                viewBox='0 0 24 24'
                                fill='white'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M12 17L5 9H19L12 17Z' />
                            </svg>
                        </button>

                        {showGearListOptions && (
                            <div
                                ref={dropdownRef}
                                className='absolute left-[-75px] z-10 mt-1 w-64 rounded-md border border-gray-200 bg-white py-1 shadow-lg'>
                                {gearList.map((group, groupIndex) => (
                                    <div
                                        key={groupIndex}
                                        className='cursor-pointer px-4 py-2 text-xs font-semibold tracking-wider text-gray-500 uppercase hover:bg-gray-100'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onGearListSelect(group?.group?.name);
                                            onGearListToggle();
                                        }}>
                                        {group.group?.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className='xs:flex-row xs:items-center flex items-center gap-2'>
                    <input
                        type='text'
                        className='xs:w-auto w-full min-w-[150px] border px-2 py-1'
                        placeholder='Add items to Gear List...'
                    />
                </div>
            </div>
        </>
    );
};

export default GearListHeader;
