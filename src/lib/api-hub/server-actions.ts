import { Cart } from '@/types/cart';
import { ProductDetailsTypes } from '@/types/common';
import { GearList } from '@/types/gearList';
import { serverFetcher } from '.';

export const getCart = async () => {
    const cart = await serverFetcher('/api?scenario=getCart');

    return cart as Cart;
};
export const getProduct = async () => {
    const product = await serverFetcher('/api?scenario=getProduct');

    return product as ProductDetailsTypes;
};

export const getGearList = async () => {
    const gearList = await serverFetcher('/api?scenario=getGearList');

    return gearList as GearList[];
};
