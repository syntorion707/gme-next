export interface Cart {
    id: string;
    number: string;
    lineItems: LineItem[];
    total: number;
}

export interface LineItem {
    name: string;
    sku: string;
    quantity: number;
    price: number;
    image?: string;
}
