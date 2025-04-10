const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ClientFetcher = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    try {
        const baseHeaders: HeadersInit = {
            'Content-Type': 'application/json'
        };
        if (window && window?.localStorage) {
            baseHeaders['authorization'] = `Bearer ${window?.localStorage?.getItem('token')}`;
        }

        const url = `${API_BASE_URL}${endpoint}`;
        const res = await fetch(url, {
            ...options,
            headers: {
                ...baseHeaders,
                ...options?.headers
            }
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error?.message || 'API request failed');
        }

        return (await res.json()) as T;
    } catch (error) {
        return error as T;
    }
};

export const serverFetcher = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
    try {
        const url = `${API_BASE_URL}${endpoint}`;
        const res = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            }
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error?.message || 'Failed to fetch data');
        }

        return (await res.json()) as T;
    } catch (error) {
        return error as T;
    }
};

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
