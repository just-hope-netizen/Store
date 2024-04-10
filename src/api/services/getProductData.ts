import axios from "axios"
import { Product } from "../../types/product.types";

const server = "http://localhost:8080/api/v1/";

export const fetchProducts = async () => {
    try {
        const res = await axios.get<Product>(server + "products/");
        return res;
    } catch (error) {
        return error
    }
}

export const getProduct = async (query: string) => {
    try {

        const res = await axios.get<Product>(server + "search?q=" + query)
        return res;
    } catch (error) {
        return error
    }
}

// export const 