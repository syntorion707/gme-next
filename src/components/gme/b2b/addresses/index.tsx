import React from 'react';
import BillingAddress from './billing-address';
import ShippingAddress from './shipping-address';

const Addresses = () => {
    return (
        <div className='flex flex-col gap-10'>
            <BillingAddress />
            <ShippingAddress />
        </div>
    );
};

export default Addresses;
