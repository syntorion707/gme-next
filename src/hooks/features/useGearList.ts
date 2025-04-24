'use client';

import useSWR, { SWRResponse } from 'swr';
import { GearList } from '@/types/gearList';

export const useGearList = () => {
    const {
        data: gearList,
        error,
        isLoading: isFetchingGearList
    }: SWRResponse<GearList[]> = useSWR('/api?scenario=gearList');

    return { gearList, error, isFetchingGearList };
};
