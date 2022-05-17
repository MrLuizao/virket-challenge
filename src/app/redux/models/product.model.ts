export class Product{
    id: number;
    is_favorite: boolean;
    brand: string;
    description: string;
    discount: string;
    product_image: string;
    product_name: string;
    product_price: string;
    reviews: string;
    score: number;
    sku: string;
    colors: [Colors];
    color: {any};
    open: boolean;
}

export class Colors{
    hex: string;
    name: string;
}