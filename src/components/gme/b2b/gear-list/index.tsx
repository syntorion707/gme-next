'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { useSort } from '@/hooks/useSort';
import { GearItem, GearList as GearListType } from '@/types/gearList';
import GearListActions from './gear-list-actions';
import GearListHeader from './gear-list-header';
import GearListTable from './gear-list-table';
import GearListToolbar from './gear-list-toolbar';

export type GearListProps = {
    data: GearListType[];
};

const GearList = ({ data }: GearListProps) => {
    const [gearList, setGearList] = useState<GearListType[]>(data ?? []);
    const [tableItems, setTableItems] = useState<GearItem[]>([]);
    const [selectedRows, setSelectedRows] = useState(10);
    const [selectedGearList, setSelectedGearList] = useState(gearList?.[0]?.group?.name ?? '');
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
    const [showGearListOptions, setShowGearListOptions] = useState(false);
    const [addGearListOptions, setShowaddGearListOptions] = useState(false);

    // Refs
    const gearListRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Custom hooks
    const { requestSort, sortConfig } = useSort();
    useOutsideClick(
        gearListRef,
        () => {
            setShowGearListOptions(false);
            setShowaddGearListOptions(false);
        },
        dropdownRef
    );

    // Handler functions
    const handleCheckboxChange = (itemId: string) => {
        setCheckedItems((prev) => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const handleReorder = (newItems: GearItem[]) => {
        setTableItems(newItems);
    };

    const handleAddToCart = () => {
        // Add to cart logic
    };

    const handleDeleteList = () => {
        // Delete list logic
    };

    useEffect(() => {
        if (selectedGearList) {
            const gearList = data?.find((list: GearListType) => list?.group?.name === selectedGearList);
            if (gearList) setTableItems(gearList?.group?.items);
        }
    }, [selectedGearList, data]);

    return (
        <div>
            <GearListHeader
                title='GEAR LIST'
                selectedGearList={selectedGearList}
                showGearListOptions={showGearListOptions}
                onGearListToggle={() => setShowGearListOptions(!showGearListOptions)}
                onGearListSelect={setSelectedGearList}
                gearListRef={gearListRef}
                dropdownRef={dropdownRef}
                gearList={data ?? []}
            />

            <GearListToolbar selectedRows={selectedRows} onRowsChange={setSelectedRows} />

            <GearListTable
                items={tableItems}
                checkedItems={checkedItems}
                sortConfig={sortConfig}
                requestSort={requestSort}
                onCheckboxChange={handleCheckboxChange}
                onReorder={handleReorder}
            />

            <GearListActions
                onAddToCart={handleAddToCart}
                onDelete={handleDeleteList}
                showAddGearListOptions={addGearListOptions}
                onAddGearListToggle={() => setShowaddGearListOptions(!addGearListOptions)}
                gearListRef={gearListRef}
            />
        </div>
    );
};

export default GearList;
