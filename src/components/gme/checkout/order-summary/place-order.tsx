'use client';

import { useState } from 'react';

const PlaceOrder = () => {
    const [optionalPo, setOptionalPo] = useState('');
    const [optionalJobName, setOptionalJobName] = useState('');

    return (
        <>
            <button className='bg-button-accent hover:bg-primary text-background w-[90%] cursor-pointer rounded-sm px-3 py-1.5 disabled:opacity-65'>
                Place Order
            </button>
            <div className='mt-2 mb-3 grid grid-cols-2 gap-x-6 pb-2 text-left md:grid-cols-1 lg:grid-cols-2'>
                <div className='flex flex-col gap-2 p-2'>
                    <label htmlFor='optionalPo'>PO:</label>
                    <input
                        type='text'
                        id='optionalPo'
                        name='optionalPo'
                        value={optionalPo}
                        className='form_input px-2 py-1.5'
                        placeholder='(Optional)'
                        onChange={(event) => setOptionalPo(event.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-2 p-2'>
                    <label htmlFor='optionalJobName'>Job Name:</label>
                    <input
                        type='text'
                        id='optionalJobName'
                        name='optionalJobName'
                        value={optionalJobName}
                        className='form_input px-2 py-1.5'
                        placeholder='(Optional)'
                        onChange={(event) => setOptionalJobName(event.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;
