import { useState } from 'react';

export type SortConfig = {
    key: string;
    direction: 'asc' | 'desc';
} | null;

export function useSort() {
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return { sortConfig, requestSort };
}
