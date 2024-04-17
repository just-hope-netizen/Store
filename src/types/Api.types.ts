import { Product } from "./product.types";

export type Response = {
    config: object;
    data: Product[];
    headers: object;
    request: object;
    status: number;
    statusText: string
}