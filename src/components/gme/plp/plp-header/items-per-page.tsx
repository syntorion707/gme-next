import React from 'react';
import { INITIAL_ITEMS_PER_PAGE, ITEMS_PER_PAGE_OPTIONs } from '@/helpers/constants';

type Props = {
    itemsPerPage: number;
    onItemsPerPageChange: (itemsPerPage: number) => void;
};

const ItemsPerPage = (props: Props) => {
    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newItemsPerPage = Number(e.target.value);
        props.onItemsPerPageChange(newItemsPerPage);
    };

    return (
        <div>
            <select
                name='page'
                id='page'
                value={props.itemsPerPage || INITIAL_ITEMS_PER_PAGE}
                onChange={handleItemsPerPageChange}
                className='cursor-pointer rounded border border-gray-300 p-2 text-center'>
                {ITEMS_PER_PAGE_OPTIONs.map((option) => (
                    <option key={option} value={option}>
                        {option} items per page
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ItemsPerPage;
