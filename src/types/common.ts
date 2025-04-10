export type ISearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ProductDimensions {
    width: string;
    length: string;
}

interface ProductSpecs {
    product_code: string;
    manufacturer: string;
    sku: string;
    dimensions: ProductDimensions;
    weight: number;
    additional_skus: string[];
}

interface Product {
    productName: string;
    productDescription: string;
    productPrice: string;
    productImages: string[];
    productRating: number;
    logo: string;
    model: string;
    stock: string;
    wireGauge: Array<{ value: string }>;
    length: string;
    specs: ProductSpecs;
}

export type ProductDetailsTypes = {
    product: Product;
};
