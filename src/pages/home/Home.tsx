import React, { useEffect, useState } from "react";
import { Header } from "../../components/header";
import "./home.module.css"
import { Search } from "../../components/search";
import { Product } from "../../types/product.types";
import axios from "axios";
import style from "./home.module.css";
import { fetchProducts } from "../../api/services/getProductData";
import { ProductCard } from "../../components/productCard";


const Home = () => {
    const [productData, setProductData] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts().then(res => setProductData(res));
        // setProductData(data.data)


    }, [])

    return <div className="home">
        <Header />
        <Search />
        <ul className={`flex-row wrap ${style.listParent}`}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </ul>
        {/* {productsData.map} */}

    </div>

}
export default Home;