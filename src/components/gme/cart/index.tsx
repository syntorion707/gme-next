'use client';

import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import { Cart as ICart } from '@/types/cart';
import CartList from './cart-list';

export type CartProps = {
    data: ICart;
};
export const Cart = ({ data }: CartProps) => {
    const { data: cartData } = useSWR('/api?scenario=getCart', null, {
        fallbackData: data,
        revalidateOnMount: false
    });

    return (
        <div className='px-[2.5%]'>
            <div className='flex flex-col'>
                <div className='flex justify-end px-2 pt-5 text-[21px] font-bold md:text-base'>
                    Cart #: {cartData.number}
                </div>
                <CartList data={cartData} />
            </div>
        </div>
    );
};
