import Image from 'next/image';
import React from 'react';

const QuickShip = () => {
    return (
        <div className='flex gap-2'>
            <Image
                width={60}
                height={200}
                src='https://www.gmesupply.com/Content/Images/quick-ship-g1.svg'
                alt='quick-ship'
            />
            <div className='mt-1.5 flex flex-col gap-1'>
                <Image
                    width={100}
                    height={200}
                    src='https://www.gmesupply.com/Content/Images/quick-ship-t1.svg'
                    alt='quick-ship'
                />
                <p className='text-xs text-[#008200]'>Get It By Apr 11</p>
            </div>
        </div>
    );
};

export default QuickShip;
