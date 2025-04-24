import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
    ref: RefObject<HTMLElement | null>,
    callback: () => void,
    excludeRef?: RefObject<HTMLElement | null> // Optional ref to exclude
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                (!excludeRef?.current || !excludeRef.current.contains(event.target as Node))
            ) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback, excludeRef]);
};
