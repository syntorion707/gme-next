interface ProductType {
    id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    category: 'solar' | 'wind' | 'general' | 'safety' | 'tools';
    type: 'helmet' | 'safety-belt' | 'gloves' | 'tool' | 'clothing';
    isOnSale: boolean;
    inStock: boolean;
    imageUrl?: string;
    rating?: number;
}
