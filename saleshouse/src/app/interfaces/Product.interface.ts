export interface Products {
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}

export interface Product {
    price: string;
    name: string;
    image: string;
    rating: number;
}