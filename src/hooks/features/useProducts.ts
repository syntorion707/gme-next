'use client';

import useSWR, { SWRResponse } from 'swr';

export const useProducts = () => {
    const { data: products, error, isLoading: isFetchingProducts } = useSWR('/api?scenario=getProducts');
    console.log('Fetched data from useProducts from swr:', products);
    
return { products, error, isFetchingProducts };
};
