'use client';

import PopupButton from '@/components/atoms/popup-button';

const PromoCodeModal = () => {
    return (
        <PopupButton
            text='Have a promo code?'
            handleClick={() => {
                console.log('clicked');
            }}
        />
    );
};

export default PromoCodeModal;
