import { Cart } from '@/types/cart';
import { CategoryType } from '@/types/category';
import { ProductDetailsTypes } from '@/types/common';
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
    const category = await serverFetcher('/api?scenario=getCategory');

    return category as CategoryType[];
};

export const getProduct = async () => {
    const products = await serverFetcher('/api?scenario=getProduct');

    return products as ProductDetailsTypes[];
};
