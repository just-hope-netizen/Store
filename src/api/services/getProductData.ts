import axios from "axios"

const server = "http://localhost:8080/api/v1/";

export const fetchProducts = async () => {
    const res = await axios.get(server + "products/");
    const data = res.data

    return data;
}