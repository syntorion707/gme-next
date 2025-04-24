'use client';

import { DragEvent, useState } from 'react';
import { SortConfig } from '@/hooks/useSort';
import { GearItem } from '@/types/gearList';
import { getSortIndicator } from '../sort-indicator';
import GearListItem from './gear-list-item';

interface GearListTableProps {
    items: GearItem[];
    checkedItems: Record<string, boolean>;
    sortConfig: SortConfig;
    requestSort: (key: string) => void;
    onCheckboxChange: (itemId: string) => void;
    onReorder: (items: GearItem[]) => void;
}

const GearListTable = ({
    items,
    checkedItems,
    sortConfig,
    requestSort,
    onCheckboxChange,
    onReorder
}: GearListTableProps) => {
    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const handleDragStart = (e: DragEvent<HTMLTableCellElement>, index: number) => {
        setDraggedItemIndex(index);
        e.dataTransfer.effectAllowed = 'move';

        // Create a custom drag image of the entire row
        const row = e.currentTarget.closest('tr');
        if (row) {
            const dragImage = row.cloneNode(true) as HTMLElement;
            dragImage.style.width = `${row.offsetWidth}px`;
            dragImage.style.position = 'fixed';
            dragImage.style.top = '-9999px';
            document.body.appendChild(dragImage);

            e.dataTransfer.setDragImage(dragImage, 0, 0);
            setTimeout(() => document.body.removeChild(dragImage), 0);
        }

        // Highlight the row
        row?.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50');
    };

    const handleDragOver = (e: DragEvent<HTMLTableRowElement>, index: number) => {
        e.preventDefault();
        if (draggedItemIndex === null || draggedItemIndex === index) return;

        // Calculate new position
        const newItems = [...items];
        const [removed] = newItems.splice(draggedItemIndex, 1);
        newItems.splice(index, 0, removed);

        onReorder(newItems);
        setDraggedItemIndex(index);
        setHoveredIndex(index);
    };

    const handleDragEnd = () => {
        // Remove highlight from all rows
        document.querySelectorAll('tr').forEach((row) => {
            row.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50');
        });
        setDraggedItemIndex(null);
        setHoveredIndex(null);
    };

    return (
        <div className='overflow-x-auto'>
            <table className='min-w-full bg-white'>
                <thead>
                    <tr className='border-t-3 border-red-600'>
                        <TableHeader
                            title='Category'
                            sortKey='category'
                            sortConfig={sortConfig}
                            requestSort={requestSort}
                        />
                        <th className='cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'>
                            <div className='flex items-center justify-between'></div>
                        </th>
                        <TableHeader title='Model#' sortKey='model' sortConfig={sortConfig} requestSort={requestSort} />
                        <TableHeader
                            title='Description'
                            sortKey='description'
                            sortConfig={sortConfig}
                            requestSort={requestSort}
                        />
                        <TableHeader title='Qty' sortKey='quantity' sortConfig={sortConfig} requestSort={requestSort} />
                        <TableHeader title='UoM' sortKey='uom' sortConfig={sortConfig} requestSort={requestSort} />
                        <TableHeader title='Order' sortKey='order' sortConfig={sortConfig} requestSort={requestSort} />
                        <TableHeader
                            title='Remove'
                            sortKey='remove'
                            sortConfig={sortConfig}
                            requestSort={requestSort}
                        />
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <GearListItem
                            key={item.id}
                            item={item}
                            index={index}
                            isChecked={checkedItems[item.id] || false}
                            onCheckboxChange={onCheckboxChange}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDragEnd={handleDragEnd}
                            draggedItemIndex={draggedItemIndex}
                            hoveredIndex={hoveredIndex}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableHeader = ({
    title,
    sortKey,
    sortConfig,
    requestSort
}: {
    title: string;
    sortKey: string;
    sortConfig: SortConfig;
    requestSort: (key: string) => void;
}) => {
    return (
        <th
            className='min-w-[100px] cursor-pointer border-r border-white bg-black px-4 py-3 font-semibold text-white'
            onClick={() => requestSort(sortKey)}>
            <div className='flex items-center justify-between'>
                {title}
                {getSortIndicator(sortKey, sortConfig)}
            </div>
        </th>
    );
};

export default GearListTable;
