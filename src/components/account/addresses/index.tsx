import React from 'react';
import BillingAddress from './billingAddress';
import ShippingAddress from './shippingAddress';

const addresses = () => {
    return (
        <div className='flex flex-col gap-10'>
            <BillingAddress />
            <ShippingAddress />
        </div>
    );
};

export default addresses;
