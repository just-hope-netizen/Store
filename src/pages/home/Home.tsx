import React from "react";
import { Header } from "../../components/header";
import "./home.module.css"
import { Hero } from "../../components/hero";
import { Search } from "../../components/search";
import { Menu } from "../../components/menu";

interface props {

    // name: string
}

const Home = () => {
    return <div className="home">
        <Header />
        <Search />

        {/* </> */}
    </div>

}
export default Home;