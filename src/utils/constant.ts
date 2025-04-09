export interface NavLink {
    name: string;
    href: string;
    icon: string;
}

export const getVisibilityClass = (name: string) => {
    switch (name) {
        case 'Sign in':
        case 'Cart':
            return 'flex';
        case 'Quote':
            return 'hidden md:flex';
        default:
            return 'hidden lg:flex';
    }
};

export const isMobileVariant = (variant?: 'desktop' | 'mobile') => {
    return variant === 'mobile';
};
