import React from "react";
import { Header } from "../../components/header";
import "./home.module.css"
import { Search } from "../../components/search";
import style from "./home.module.css";
import { ProductCard } from "../../components/productCard";
import { Hero } from "../../components/hero";
import { CategoryCard } from "../../components/categoryCard";


const Home: React.FC = () => {



    return <div className="home">
        <Header />
        <Search />
        <Hero />
        <div className={style.line}> </div>
        <CategoryCard />
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