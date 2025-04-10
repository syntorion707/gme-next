import { Cart } from '@/types/cart';
import { ProductType } from '@/types/product';
import { serverFetcher } from '.';

export const getCart = async () => {
    const cart = await serverFetcher('/api?scenario=getCart');

    return cart as Cart;
};

export const getProducts = async () => {
    const products = await serverFetcher('/api?scenario=getProducts');

    return products as ProductType[];
};
