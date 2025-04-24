'use client';

import useSWR, { SWRResponse } from 'swr';

export const useProducts = () => {
    const { data: products, error, isLoading: isFetchingProducts } = useSWR('/api?scenario=getProducts');
    console.log('Fetched data from useProducts from swr:', products);

    return { products, error, isFetchingProducts };
};

export const useProduct = () => {
    const { data: product, error, isLoading: isFetchingProducts } = useSWR('/api?scenario=getProduct');
    console.log('Fetched data from useProducts from swr:', product);

    return { product, error, isFetchingProducts };
};
