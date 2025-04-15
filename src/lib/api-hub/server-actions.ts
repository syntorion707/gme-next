import { Cart } from '@/types/cart';
import { CategoryType } from '@/types/category';
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

export const getCategory = async () => {
    const category = await serverFetcher('/api?scenario=getcategory');

    return category as CategoryType[];
};
