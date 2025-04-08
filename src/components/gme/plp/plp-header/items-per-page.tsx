import React from 'react';

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
                value={props.itemsPerPage || 5}
                onChange={handleItemsPerPageChange}
                className='cursor-pointer rounded border border-gray-300 p-2 text-center'>
                <option value='4'>4 items per page</option>
                <option value='5'>5 items per page</option>
            </select>
        </div>
    );
};

export default ItemsPerPage;
