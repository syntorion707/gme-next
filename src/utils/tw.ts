// utils/tw.ts
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: unknown[]) {
    return twMerge(clsx(inputs));
}
