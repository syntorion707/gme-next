import React from 'react';
import { VIEW_GRID, VIEW_LIST } from '@/helpers/constants';

type Props = {
    currentView: string;
    onViewChange: (view: 'grid' | 'list') => void;
};

const ViewSelection = (props: Props) => {
    const handleViewChange = (view: 'grid' | 'list') => {
        props.onViewChange(view);
    };

    return (
        <div className='flex gap-1'>
            <button
                onClick={() => handleViewChange(VIEW_GRID)}
                className={`text-secondary flex h-7 w-16 cursor-pointer items-center gap-1 border p-1 font-bold ${
                    props.currentView === 'grid'
                        ? 'bg-primary rounded border-2 border-black text-white'
                        : 'border-my-border-grey border'
                }`}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-grid-fill'
                    viewBox='0 0 16 16'>
                    <path d='M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z' />
                </svg>
                <span className='text-sm'>Grid</span>
            </button>
            <button
                onClick={() => handleViewChange(VIEW_LIST)}
                className={`text-secondary flex h-7 w-16 cursor-pointer items-center gap-1 p-1 ${
                    props.currentView === 'list'
                        ? 'bg-primary rounded border-2 border-black text-white'
                        : 'border-my-border-grey border'
                }`}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-list-ul'
                    viewBox='0 0 16 16'>
                    <path d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                </svg>
                <span className='text-sm font-bold'>List</span>
            </button>
        </div>
    );
};

export default ViewSelection;
