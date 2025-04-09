import { Cart } from '@/types/cart';
import { serverFetcher } from '.';

export const getCart = async () => {
    const cart = await serverFetcher('/api?scenario=getCart');

    return cart as Cart;
};
