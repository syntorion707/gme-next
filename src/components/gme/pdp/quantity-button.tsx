import React, { useState } from 'react';

const QuantityButton = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleInputChange = (e: any) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        } else if (e.target.value === '') {
            setQuantity(1);
        }
    };

    return (
        <div className='flex gap-2 py-2'>
            <div className='border border-black'>
                <button
                    className='text-md cursor-pointer border-r border-black bg-white p-2 font-bold text-black hover:bg-black hover:text-white md:text-lg'
                    onClick={decreaseQuantity}>
                    -
                </button>
                <input
                    type='number'
                    min='1'
                    value={quantity}
                    onChange={handleInputChange}
                    className='text-md w-12 border-none text-center font-bold text-black focus:outline-none md:text-lg'
                />
                <button
                    className='text-md cursor-pointer border-l border-black bg-white p-2 font-bold text-black hover:bg-black hover:text-white md:text-lg'
                    onClick={increaseQuantity}>
                    +
                </button>
            </div>

            <div className='flex rounded-full bg-green-300 p-1 text-white hover:bg-green-700'>
                <svg
                    className='mt-2 ml-2 h-6 w-6 text-white'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <circle cx='9' cy='19' r='2' />
                    <circle cx='17' cy='19' r='2' />
                    <path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
                </svg>
                <p className='md:text-md px-2 pt-2 text-sm font-bold'>Select an option</p>
            </div>
        </div>
    );
};

export default QuantityButton;
