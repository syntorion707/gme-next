import React from 'react';

const ProductDetailsDropdown = () => {
    const dropdowndata = {
        productOptions: {
            harnessSizes: [
                {
                    value: '',
                    label: 'Choose a Selection...'
                },
                {
                    value: '1113356',
                    label: '3M DBI-SALA ExoFit X300, 1113356, X-Small - XS'
                },
                {
                    value: '1113190',
                    label: '3M DBI-SALA ExoFit X300, 1113190, Small'
                },
                {
                    value: '1113191',
                    label: '3M DBI-SALA ExoFit X300, 1113191, Medium'
                },
                {
                    value: '1113192',
                    label: '3M DBI-SALA ExoFit X300, 1113192, Large'
                },
                {
                    value: '1113193',
                    label: '3M DBI-SALA ExoFit X300, 1113193, X-Large - XL'
                }
            ],
            helmets: [
                {
                    value: '',
                    label: 'Choose a Selection...'
                },
                {
                    value: 'vertex-white',
                    label: 'Petzl Vertex Helmet -White-Vented'
                },
                {
                    value: 'vertex-yellow',
                    label: 'Petzl Vertex Helmet -Yellow-Vented'
                },
                {
                    value: 'vertex-red',
                    label: 'Petzl Vertex Helmet -Red-Vented'
                }
            ],
            cableGrabs: [
                {
                    value: 'x3',
                    label: 'DBI Sala Lad-Saf X3 Detachable Cable Safety Sleeve'
                },
                {
                    value: 'x2',
                    label: 'DBI Sala Lad-Saf X2 Detachable Cable Safety Sleeve + $20.00',
                    priceAdjustment: 20.0
                }
            ],
            boltBags: [
                {
                    value: 'canvas',
                    label: '2x GME Supply Heavy Duty Top-Closing Canvas Bolt Bag with Connectors'
                },
                {
                    value: 'nylon',
                    label: '2x GME Supply Heavy Duty Top-Closing Nylon Bolt Bag with Connectors + $30.00',
                    priceAdjustment: 30.0
                }
            ],
            gearBags: [
                {
                    value: 'deluxe',
                    label: 'GME Supply Deluxe Gear Bag'
                },
                {
                    value: 'premium',
                    label: 'GME Supply Premium Gear Bag + $20.00',
                    priceAdjustment: 20.0
                }
            ],
            lanyardLengths: [
                {
                    value: '2m',
                    label: 'Petzl L052AA Grillon Adjustable Positioning Lanyard-White/Yellow-2 meter'
                },
                {
                    value: '3m',
                    label: 'Petzl L052AA Grillon Adjustable Positioning Lanyard-White/Yellow-3 meter + $5.00',
                    priceAdjustment: 5.0
                }
            ],
            includedItems: [
                {
                    name: 'Shock-Absorbing Lanyard',
                    description: "Safewaze V-Line 6' Stretch Internal Energy Absorbing Lanyard"
                },
                {
                    name: 'Spreader Bar',
                    description: 'WestFall Pro 7475 Spreader Bar'
                },
                {
                    name: 'Westfall Pro 7400 Steel Carabiners',
                    description: '2x WestFall Pro 7400 4-7/8 x 3-1/8 Inch Steel Carabiner'
                },
                {
                    name: 'Westfall Pro 7430 Steel Carabiner',
                    description: 'WestFall Pro 7430 8-1/4 x 5-1/2 Inch Steel Carabiner'
                }
            ]
        }
    };

    return (
        <div className='mx-auto max-w-2xl space-y-6 p-4'>
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Harness Size <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    {dropdowndata?.productOptions?.harnessSizes?.map((harness, index) => (
                        <option key={index}>{harness?.label}</option>
                    ))}
                </select>
            </div>

            {/* Helmet */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Helmet <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    {dropdowndata?.productOptions?.helmets?.map((helmet, index) => (
                        <option key={index}>{helmet?.label}</option>
                    ))}
                </select>
            </div>

            {/* Cable Grab */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Cable Grab <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    {dropdowndata?.productOptions?.cableGrabs?.map((cableGrab, index) => (
                        <option key={index}>{cableGrab?.label}</option>
                    ))}
                </select>
            </div>

            {/* Bolt Bag */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Bolt Bag <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    {dropdowndata?.productOptions?.boltBags?.map((boltBag, index) => (
                        <option key={index}>{boltBag?.label}</option>
                    ))}
                </select>
            </div>

            {/* Gear Bag */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Gear Bag <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    {dropdowndata?.productOptions?.gearBags?.map((gearBag, index) => (
                        <option key={index}>{gearBag?.label}</option>
                    ))}
                </select>
            </div>

            {/* Lanyard Length */}
            <div>
                <label className='mb-1 block font-semibold'>
                    Choose Your Positioning Lanyard Length <span className='text-red-500'>*</span>
                </label>
                <select className='w-full rounded border border-gray-300 p-2'>
                    {dropdowndata?.productOptions?.lanyardLengths?.map((lanyardLength, index) => (
                        <option key={index}>{lanyardLength?.label}</option>
                    ))}
                </select>
            </div>

            {/* Shock-Absorbing Lanyard */}
            {dropdowndata?.productOptions?.includedItems.map((item, index) => (
                <div key={index}>
                    <label className='mb-1 block font-semibold text-gray-700'>
                        {item?.name} <span className='text-red-500'>*</span>
                    </label>
                    <p className='ml-1 text-gray-800'>{item?.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductDetailsDropdown;
