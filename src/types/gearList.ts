export interface GearItem {
    id: string;
    category: string;
    model: string;
    description: string;
    image?: string;
    quantity?: string;
    uom: string;
    order?: string;
    remove?: string;
    isQuickShip?: boolean;
}

export interface GearListOptionGroup {
    group: string;
    options: string[];
    isRecommended?: boolean;
}

export interface GearList {
    group: {
        name: string;
        isRecommended: boolean;
        items: GearItem[];
    };
}
