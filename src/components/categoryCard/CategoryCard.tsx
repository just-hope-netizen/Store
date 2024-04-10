import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/services/getProductData";
import { Response } from "../../types/Api.types";
import { useState } from "react";
import axios from "axios";
import { Product } from "../../types/product.types";

const CategoryCard: React.FC = () => {
    const [fetchData, setFetchData] = useState<Product[]>([]);
    const { data } = useQuery({
        queryKey: ['products'], queryFn: async () => {
            const res = await axios.get("http://localhost:8080/api/v1/products");
            return res.data;
        }
    });
    // const productData: Product =  data?.data;
    // setFetchData(data)
    console.log(fetchData);
    console.log(data);

    return <li>
        {/* {data} */}
    </li>
}
export default CategoryCard;