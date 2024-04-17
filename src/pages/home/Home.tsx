import React from "react";
import { Header } from "../../components/header";
import "./home.module.css"
import { Search } from "../../components/search";
import style from "./home.module.css";
import { ProductCard } from "../../components/productCard";
import { Hero } from "../../components/hero";
import { CategoryCard } from "../../components/categoryCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../../types/product.types";
import { Response } from "../../types/Api.types";


const Home: React.FC = () => {
    const { data } = useQuery<Response>({
        queryKey: ['products'], queryFn: async () =>
            await axios.get("http://localhost:8080/api/v1/products")
    });


    // remove duplicates category
    const uniqueData: Product[] | undefined = data?.data
        .filter((i, index, arr) => index === arr.findIndex(ele => i.category === ele.category));




    return <div className="home">
        <Header />
        <Search />
        <Hero />
        <CategoryCard data={uniqueData} />
        <div className={style.line}> </div>
        <ul className={`flex-row wrap ${style.listParent}`}>
            <ProductCard data={data?.data} />

        </ul>
        {/* {productsData.map} */}

    </div>

}
export default Home;