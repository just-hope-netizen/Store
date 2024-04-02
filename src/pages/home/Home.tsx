import React from "react";
import { Header } from "../../components/header";
import "./home.module.css"
import { Hero } from "../../components/hero";
import { Search } from "../../components/search";
import logo from "../../assets/svg/logo.svg"

interface props {

    // name: string
}

const Home: React.FC<props> = () => {
    return <div className="home">
        <Header />
        <Search />
        {logo}
        {/* </> */}
    </div>

}
export default Home;