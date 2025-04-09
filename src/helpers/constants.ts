export const INITIAL_ITEMS_PER_PAGE = 16;
export const MAX_VISIBLE_PAGES = 5;
export const INITIAL_SORT_OPTION = 'relevance';
export const VIEW_GRID = 'grid';
export const VIEW_LIST = 'list';

export const ITEMS_PER_PAGE_OPTIONs = [12, 16];
export type ViewType = typeof VIEW_GRID | typeof VIEW_LIST;

export const VARIANT_DEFAULT = 'default';
export const VARIANT_MOBILE = 'mobile';

export type PaginationVariant = typeof VARIANT_DEFAULT | typeof VARIANT_MOBILE;

export const SORT_OPTIONS = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low-high', label: 'Price (low to high)' },
    { value: 'price-high-low', label: 'Price (high to low)' }
];
