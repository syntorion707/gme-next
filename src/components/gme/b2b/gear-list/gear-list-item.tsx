'use client';

import Image from 'next/image';
import { DragEvent } from 'react';
import QuickShip from '@/components/molecules/quick-ship';
import { GearItem } from '@/types/gearList';

interface GearListItemProps {
    item: GearItem;
    index: number;
    isChecked: boolean;
    onCheckboxChange: (itemId: string) => void;
    onDragStart: (e: DragEvent<HTMLTableCellElement>, index: number) => void;
    onDragOver: (e: DragEvent<HTMLTableRowElement>, index: number) => void;
    onDragEnd: () => void;
    draggedItemIndex: number | null;
    hoveredIndex: number | null;
}

const GearListItem = ({
    item,
    index,
    isChecked,
    onCheckboxChange,
    onDragStart,
    onDragOver,
    onDragEnd,
    draggedItemIndex,
    hoveredIndex
}: GearListItemProps) => {
    return (
        <tr
            onDragOver={(e) => onDragOver(e, index)}
            className={`transition-all duration-150 ${index % 2 === 0 ? 'border-t-1 border-b-1 border-gray-200 bg-gray-100' : 'bg-white'} ${draggedItemIndex === index ? 'border-2 border-blue-500 bg-gray-200 shadow-2xl' : 'hover:bg-gray-100'} ${hoveredIndex === index ? 'border-2 border-gray-400' : ''}`}>
            {/* Category column - draggable */}
            <td className='px-4 py-2' draggable onDragStart={(e) => onDragStart(e, index)} onDragEnd={onDragEnd}>
                <div className='flex w-[150px] items-center'>
                    <div className='break-words whitespace-normal uppercase'>{item.category}</div>
                </div>
            </td>
            <td className='px-4 py-2 whitespace-nowrap'>
                {item.image && (
                    <div className='relative h-16 w-16 min-w-[64px] bg-white'>
                        <Image
                            src={item.image}
                            alt={item.model}
                            fill
                            className='object-contain p-1'
                            sizes='(max-width: 640px) 64px, 96px'
                            quality={80}
                        />
                    </div>
                )}
            </td>
            <td className='text-primary px-4 py-2'>
                <div className='w-[125px] break-words whitespace-normal'>{item.model}</div>
            </td>
            <td className='px-4 py-3'>
                <div className='w-[245px]'>
                    <div className='break-words text-gray-900'>{item.description}</div>
                    {item?.isQuickShip && (
                        <div className='mt-1'>
                            <QuickShip />
                        </div>
                    )}
                    {!item?.quantity && !item?.isQuickShip && (
                        <div className='py-2'>
                            <div className='font-semibold'>ON BACKORDER</div>
                            <div>Call for availability</div>
                        </div>
                    )}
                </div>
            </td>
            <td className='px-4 py-2 text-center whitespace-nowrap'>
                {item.quantity && (
                    <input
                        type='text'
                        className='w-16 border p-1 text-center'
                        value={item.quantity}
                        onChange={() => {}}
                    />
                )}
            </td>
            <td className='px-4 py-2 text-center whitespace-nowrap'>{item.uom}</td>
            <td className='px-4 py-2 whitespace-nowrap'>
                {item.quantity ? (
                    <button className='bg-primary hover:bg-primary-dark cursor-pointer rounded-sm px-4 py-1 font-bold whitespace-nowrap text-white'>
                        Options
                    </button>
                ) : (
                    <div className='flex items-center justify-center'>
                        <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={() => onCheckboxChange(item.id)}
                            className='text-primary focus:ring-primary h-4 w-4 cursor-pointer rounded border-gray-300'
                        />
                    </div>
                )}
            </td>
            <td className='px-4 py-2 text-center whitespace-nowrap'>
                <button className='cursor-pointer text-red-500 hover:text-red-700'>
                    <svg
                        className='h-5 w-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                    </svg>
                </button>
            </td>
        </tr>
    );
};

export default GearListItem;
