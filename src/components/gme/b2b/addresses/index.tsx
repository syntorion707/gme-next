import React from 'react';
import BillingAddress from './billingAddress';
import ShippingAddress from './shippingAddress';

const Addresses = () => {
    return (
        <div className='flex flex-col gap-10'>
            <BillingAddress />
            <ShippingAddress />
        </div>
    );
};

export default Addresses;
