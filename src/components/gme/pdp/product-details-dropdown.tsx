import React from 'react';

const ProductDetailsDropdown = () => {
    return (
        <div className='mx-auto max-w-2xl space-y-6 p-4'>
            {/* Harness Size */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Harness Size <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    <option>Choose a Selection...</option>
                    <option>3M DBI-SALA ExoFit X300, 1113356, X-Small - XS</option>
                    <option>3M DBI-SALA ExoFit X300, 1113190, Small</option>
                    <option>3M DBI-SALA ExoFit X300, 1113191, Medium</option>
                    <option>3M DBI-SALA ExoFit X300, 1113192, Large</option>
                    <option>3M DBI-SALA ExoFit X300, 1113193, X-Large - XL</option>
                </select>
            </div>

            {/* Helmet */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Helmet <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    <option>Petzl Vertex Helmet -White-Vented</option>
                    <option>Petzl Vertex Helmet -Yellow-Vented</option>
                    <option>Petzl Vertex Helmet -Red-Vented</option>
                </select>
            </div>

            {/* Cable Grab */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Cable Grab <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    <option>DBI Sala Lad-Saf X3 Detachable Cable Safety Sleeve</option>
                    <option>DBI Sala Lad-Saf X2 Detachable Cable Safety Sleeve + $20.00</option>
                </select>
            </div>

            {/* Bolt Bag */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Bolt Bag <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    <option>2x GME Supply Heavy Duty Top-Closing Canvas Bolt Bag with Connectors</option>
                    <option>2x GME Supply Heavy Duty Top-Closing Nylon Bolt Bag with Connectors + $30.00</option>
                </select>
            </div>

            {/* Gear Bag */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Gear Bag <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    <option>GME Supply Deluxe Gear Bag</option>
                    <option>GME Supply Premium Gear Bag + $20.00</option>
                </select>
            </div>

            {/* Lanyard Length */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Positioning Lanyard Length <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    <option>Petzl L052AA Grillon Adjustable Positioning Lanyard-White/Yellow-2 meter</option>
                    <option>Petzl L052AA Grillon Adjustable Positioning Lanyard-White/Yellow-3 meter + $5.00</option>
                </select>
            </div>

            {/* Shock-Absorbing Lanyard */}
            <div>
                <label className='mb-1 block font-semibold text-gray-700'>
                    Twin Leg Shock-Absorbing Lanyard (Included) <span className='text-red-500'>*</span>
                </label>
                <p className='ml-1 text-gray-800'>Safewaze V-Line 6' Stretch Internal Energy Absorbing Lanyard</p>
            </div>
            <div>
                <label className='mb-1 block font-semibold text-gray-700'>
                    Spreader Bar (Included) <span className='text-red-500'>*</span>
                </label>
                <p className='ml-1 text-gray-800'>WestFall Pro 7475 Spreader Bar</p>
            </div>
            <div>
                <label className='mb-1 block font-semibold text-gray-700'>
                    Westfall Pro 7400 Steel Carabiners (Included) <span className='text-red-500'>*</span>
                </label>
                <p className='ml-1 text-gray-800'>2x WestFall Pro 7400 4-7/8 x 3-1/8 Inch Steel Carabiner</p>
            </div>
            <div>
                <label className='mb-1 block font-semibold text-gray-700'>
                    Westfall Pro 7430 Steel Carabiner (Included) <span className='text-red-500'>*</span>
                </label>
                <p className='ml-1 text-gray-800'>WestFall Pro 7430 8-1/4 x 5-1/2 Inch Steel Carabiner</p>
            </div>
        </div>
    );
};

export default ProductDetailsDropdown;
