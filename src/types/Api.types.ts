import { Product } from "./product.types";

export interface Response {
    config: object;
    data: Product;
    headers: object;
    request: object;
    status: number;
    statusText: string
}