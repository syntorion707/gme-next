import React, { useState } from 'react';
import { ProductDetailsTypes } from '@/types/common';

const WireGauge: React.FC<ProductDetailsTypes> = ({ product }) => {
    const [selectedWireGauge, setSelectedWireGauge] = useState(product?.wireGauge?.[0] ?? { value: 'N/A' });
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? { value: 'N/A' });
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? { value: 'N/A' });

    return (
        <div>
            <div className='py-2'>
                <p className='text-md font-bold md:text-lg'>Wire Gauge*</p>
                <div className='grid w-70 grid-cols-2 gap-2 lg:w-100 lg:grid-cols-3'>
                    {product?.wireGauge.map((data, index) => (
                        <div
                            key={index}
                            className={`md:text-md h-8 w-32 cursor-pointer rounded-full border-2 pt-1 text-center text-sm hover:bg-green-700 hover:text-white ${
                                selectedWireGauge.value === data.value
                                    ? 'border-green-700 bg-green-700 text-white'
                                    : 'border-green-700'
                            }`}
                            onClick={() => setSelectedWireGauge(data)}>
                            {data?.value}
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-2'>
                <p className='text-md font-bold md:text-lg'>Color*</p>
                <div className='grid w-70 grid-cols-2 gap-2 lg:w-100 lg:grid-cols-3'>
                    {product?.colors.map((color, index) => (
                        <div
                            key={index}
                            className={`md:text-md h-8 w-32 cursor-pointer rounded-full border-2 pt-1 text-center text-sm hover:bg-green-700 hover:text-white ${
                                selectedColor.value === color.value
                                    ? 'border-green-700 bg-green-700 text-white'
                                    : 'border-green-700'
                            }`}
                            onClick={() => setSelectedColor(color)}>
                            {color?.value}
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-2'>
                <p className='text-md font-bold md:text-lg'>Size*</p>
                <div className='grid w-70 grid-cols-2 gap-2 lg:w-100 lg:grid-cols-3'>
                    {product?.sizes.map((size, index) => (
                        <div
                            key={index}
                            className={`md:text-md h-8 w-32 cursor-pointer rounded-full border-2 pt-1 text-center text-sm hover:bg-green-700 hover:text-white ${
                                selectedSize.value === size.value
                                    ? 'border-green-700 bg-green-700 text-white'
                                    : 'border-green-700'
                            }`}
                            onClick={() => setSelectedSize(size)}>
                            {size?.value}
                        </div>
                    ))}
                </div>
            </div>
            {/* Length */}
            <div className='py-2'>
                <p className='text-md font-bold md:text-lg'>Length*</p>
                <p className='h-8 w-18 cursor-pointer rounded-full border-2 border-green-700 pt-1 text-center hover:bg-green-700 hover:text-white'>
                    {product?.length}
                </p>
            </div>
        </div>
    );
};

export default WireGauge;
