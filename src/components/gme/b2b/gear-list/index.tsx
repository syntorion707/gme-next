'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import QuickShip from '@/components/molecules/quick-ship';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useSort } from '@/hooks/useSort';
import { getSortIndicator } from '../sort-indicator';

const GearList = () => {
    const { requestSort, sortConfig } = useSort();
    const [showRowsOptions, setShowRowsOptions] = useState(false);
    const [showGearListOptions, setShowGearListOptions] = useState(false);
    const [selectedRows, setSelectedRows] = useState(10);
    const [selectedGearList, setSelectedGearList] = useState('Master Quote');

    const gearListRef = useRef<HTMLDivElement>(null);
    const rowsRef = useRef<HTMLDivElement>(null);
    useOutsideClick(gearListRef, () => setShowGearListOptions(false));
    useOutsideClick(rowsRef, () => setShowRowsOptions(false));

    const items = [
        {
            category: 'Head PRODUCTION',
            image: 'https://www.gmesupply.com/media/pro-only/48-73-1311_3.jpg',
            model: 'C-HEAD-39327',
            description: 'Milwaukee Type 2 Safety Helmet with BOLT Accessory Clips - Black',
            // quantity: '3',
            uom: 'EA(1)',
            order: '',
            remove: ''
        },
        {
            category: 'CORING & STRIPING TOOLS',
            image: 'https://www.gmesupply.com/media/catalog/product/g/r/groupcobra.jpg',
            model: 'C-CAB-COBRA360',
            description: 'Cable Prep Cobra360 Compression Tool',
            quantity: '5',
            uom: 'EA(1)',
            order: '',
            remove: '',
            isQuickShip: true
        },
        {
            category: 'PIM & SWEEP',
            image: 'https://www.gmesupply.com/media/wireline/C-HOL-TSTL-3A-1.jpg',
            model: 'C-HOL-TSTL-3A',
            description: 'Holland Pocket Continuity Tester & Toner with Voltage Protection with AAA Battery',
            // quantity: '12',
            uom: 'PR(2)',
            order: '',
            remove: '',
            isQuickShip: true
        },
        {
            category: 'KERNMANTEL',
            image: 'https://www.gmesupply.com/media/catalog/product/b/l/blue-single-eye.jpg',
            model: 'C-WF-PSK110',
            description: 'WestFall Pro 7/16 Inch PSK Kernmantle Rope',
            quantity: '2',
            uom: 'PR(2)',
            order: '',
            remove: ''
        },
        {
            category: 'BODY COOLING/WARMING',
            image: 'https://www.gmesupply.com/media/catalog/product/1/2/12411-6601-blue-economy-evaporative-cooling-towel-2.jpg',
            model: 'ED-12411',
            description: 'Ergodyne Chill-Its Evaporative Cooling Towel',
            // quantity: '8',
            uom: 'EA(1)',
            order: '',
            remove: ''
        },
        {
            category: 'WELDING',
            image: 'https://www.gmesupply.com/media/catalog/product/s/m/smallcell-cadweld.jpg',
            model: 'KIT-SMALLCELL-CADWELD',
            description: 'Cadweld Plus Kit for Small Cells',
            quantity: '8',
            uom: 'EA(9)',
            order: '',
            remove: ''
        },
        {
            category: 'CAPSTAN HOISTS',
            image: 'https://www.gmesupply.com/media/catalog/product/c/-/c-hb-capkit6-cy-kit.jpg',
            model: 'HB-CAPKIT12-CY',
            description: 'AB Chance Straight Mount Capstan Hoist Truck Kit With Crosby McKissick Blocks-1,200 feet',
            quantity: '8',
            uom: 'EA(90)',
            isQuickShip: true
        },
        {
            category: 'fall PROTECTION HARDWARE',
            image: 'https://www.gmesupply.com/media/catalog/product/w/f/wf-7440-2.jpg',
            model: 'WF-7440',
            description: 'WestFall Pro 7440 8-1/2 x 5 Inch Steel Carabiner',
            // quantity: '8',
            uom: 'EA(15)'
        }
    ];

    const gearListOptions = [
        { group: 'Recommended by your Gear Expert', options: ['Devon Training List', 'Sample managed list'] },
        {
            group: 'Your custom gear lists',
            options: [
                'Create a new custom list...',
                '1 - Master Quote',
                "Charlie's List",
                'CUSTOM KIT WITH OPTIONS',
                'Ecom Testing',
                'Favorites'
            ]
        }
    ];

    const rowsOptions = [10, 25, 50, 100];

    return (
        <div>
            <p className='text-primary pt-2 text-center text-2xl font-semibold uppercase md:mb-2 md:pt-0 md:text-left'>
                GEAR LIST
            </p>
            <div className=''>
                <div className='mb-4 justify-between md:flex'>
                    <div className='flex items-center justify-start pb-1'>
                        <span className='font-semibold'>Gear List: </span>
                        <span className='relative pl-2' ref={gearListRef}>
                            <button
                                className='bg-primary flex cursor-pointer items-center rounded-sm p-1.5 font-bold whitespace-nowrap text-white'
                                onClick={() => setShowGearListOptions(!showGearListOptions)}>
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
                                <div className='absolute z-10 mt-1 w-64 rounded-md border border-gray-200 bg-white py-1 shadow-lg'>
                                    {gearListOptions.map((group, groupIndex) => (
                                        <div key={groupIndex}>
                                            <div className='px-4 py-2 text-xs font-semibold tracking-wider text-gray-500 uppercase'>
                                                {group.group}
                                            </div>
                                            {group.options.map((option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className='cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                    onClick={() => {
                                                        setSelectedGearList(option);
                                                        setShowGearListOptions(false);
                                                    }}>
                                                    {option}
                                                </div>
                                            ))}
                                            {groupIndex < gearListOptions.length - 1 && (
                                                <div className='my-1 border-t'></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>
                    </div>

                    <div className='xs:flex-row xs:items-center flex items-center gap-2'>
                        <input
                            type='text'
                            className='xs:w-auto w-full min-w-[150px] border px-2 py-1'
                            placeholder='Add items to Gear List...'
                        />
                    </div>
                </div>

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
                                                setSelectedRows(option);
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

                <div>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full bg-white'>
                            <thead>
                                <tr className='border-t-3 border-red-600'>
                                    <th
                                        className='min-w-[120px] cursor-pointer border-r border-white bg-black px-1 py-3 font-semibold text-white'
                                        onClick={() => requestSort('category')}>
                                        <div className='flex items-center justify-between'>
                                            Category
                                            {getSortIndicator('category', sortConfig)}
                                        </div>
                                    </th>
                                    <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'>
                                        <div className='flex items-center justify-between'></div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('model')}>
                                        <div className='flex items-center justify-between'>
                                            Model#
                                            {getSortIndicator('model', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('description')}>
                                        <div className='flex items-center justify-between'>
                                            Description
                                            {getSortIndicator('description', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('quantity')}>
                                        <div className='flex items-center justify-between'>
                                            Qty
                                            {getSortIndicator('quantity', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('uom')}>
                                        <div className='flex items-center justify-between'>
                                            UoM
                                            {getSortIndicator('uom', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('order')}>
                                        <div className='flex items-center justify-between'>
                                            Order
                                            {getSortIndicator('order', sortConfig)}
                                        </div>
                                    </th>
                                    <th
                                        className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
                                        onClick={() => requestSort('remove')}>
                                        <div className='flex items-center justify-between'>
                                            Remove
                                            {getSortIndicator('remove', sortConfig)}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, i) => (
                                    <tr
                                        key={i}
                                        className={`${i % 2 === 0 ? 'border-t-1 border-b-1 border-gray-200 bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
                                        <td className='px-4 py-2'>
                                            <div className='w-[150px]'>
                                                {' '}
                                                {/* Fixed width container */}
                                                <div className='break-words whitespace-normal uppercase'>
                                                    {item.category}
                                                </div>
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
                                        </td>{' '}
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
                                                        <div className='font-semibold'>ON BACKORDER </div>
                                                        <div>Call for availability </div>
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
                                                    onChange={(e) => {}}
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
                                                        checked={false}
                                                        onChange={() => {}} // Add your handler function here
                                                        className='text-primary focus:ring-primary h-4 w-4 rounded border-gray-300'
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-4 flex flex-col items-center text-sm md:flex-row md:justify-between'>
                        <div>
                            Showing 1 to {items.length} of {items.length} entries
                        </div>
                        <div className='flex space-x-2'>
                            <button className='hover:text-primary cursor-pointer border-none px-3 py-1'>
                                Previous
                            </button>
                            <p className='text-primary border-none px-3 py-1'>1</p>
                            <button className='hover:text-primary cursor-pointer border-none px-3 py-1'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GearList;
