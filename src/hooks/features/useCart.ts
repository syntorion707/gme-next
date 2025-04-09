'use client';

import useSWR, { SWRResponse } from 'swr';
import { Cart } from '@/types/cart';

export const useCart = () => {
    const { data: cart, error, isLoading: isFetchingCart }: SWRResponse<Cart> = useSWR('/api?scenario=getCart');

    return { cart, error, isFetchingCart };
};
