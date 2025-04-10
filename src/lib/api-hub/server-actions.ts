import { Cart } from '@/types/cart';
import { ProductDetailsTypes } from '@/types/common';
import { serverFetcher } from '.';

export const getCart = async () => {
    const cart = await serverFetcher('/api?scenario=getCart');

    return cart as Cart;
};
export const getProduct = async () => {
    const product = await serverFetcher('/api?scenario=getProduct');

    return product as ProductDetailsTypes;
};
