'use client';

import { useRef, useState } from 'react';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface GearListToolbarProps {
    selectedRows: number;
    onRowsChange: (rows: number) => void;
}

const rowsOptions = [10, 25, 50, 100];

const GearListToolbar = ({ selectedRows, onRowsChange }: GearListToolbarProps) => {
    const rowsRef = useRef<HTMLDivElement>(null);
    const [showRowsOptions, setShowRowsOptions] = useState(false);
    useOutsideClick(rowsRef, () => setShowRowsOptions(false));

    return (
        <div className='mb-4 justify-between md:flex'>
            <div className='flex flex-wrap items-center justify-start text-sm text-white'>
                <button className='cursor-pointer bg-[#6c757d] p-2 hover:bg-[#50565b]'>Copy</button>
                <button className='cursor-pointer bg-[#6c757d] p-2 hover:bg-[#50565b]'>Excel</button>
                <button className='cursor-pointer bg-[#6c757d] p-2 hover:bg-[#50565b]'>PDF</button>
                <div ref={rowsRef} className='relative'>
                    <button
                        className='flex cursor-pointer items-center bg-[#6c757d] p-2 hover:bg-[#50565b]'
                        onClick={() => setShowRowsOptions(!showRowsOptions)}>
                        Show {selectedRows} Rows
                        <svg
                            className={`ml-1 h-4 w-4 transition-transform ${showRowsOptions ? 'rotate-180' : ''}`}
                            viewBox='0 0 24 24'
                            fill='white'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12 17L5 9H19L12 17Z' />
                        </svg>
                    </button>
                    {showRowsOptions && (
                        <div className='absolute z-10 mt-1 rounded-md border border-gray-200 bg-white py-1 shadow-lg'>
                            {rowsOptions.map((option) => (
                                <div
                                    key={option}
                                    className='cursor-pointer px-5 py-2 text-sm text-gray-700 hover:bg-[#007bff]'
                                    onClick={() => {
                                        onRowsChange(option);
                                        setShowRowsOptions(false);
                                    }}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className='xs:flex-row xs:items-center items-center gap-2 pt-3 md:flex md:py-0'>
                <input
                    type='text'
                    className='xs:w-auto w-full min-w-[100px] border px-2 py-1'
                    placeholder='Search this Gear List...'
                />
                <div className='py-2 md:py-0'>
                    <button className='bg-primary hover:bg-primary-dark cursor-pointer rounded-sm px-4 py-1 font-bold whitespace-nowrap text-white'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GearListToolbar;
