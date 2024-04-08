import React, { useState } from "react";
import style from "./header.module.css"
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";
import bag from "../../assets/icons/shoppingBag.svg";
import { IconButton } from "../iconButton";
import { Menu } from "../menu";
import { Backdrop } from "../backdrop";


const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);


    const buttonHandler = () => {
        setShowMenu(!showMenu)
    }
    return <>

        <header>
            <div className={`flex-row ${style.imgsParent}`}>
                <IconButton src={menu} alt={"menu"} onClick={buttonHandler} />
                <img src={logo} alt="logo" className={style.logo} />
                <IconButton src={bag} alt={"shoppig bag"} onClick={buttonHandler} />
            </div>

        </header>
        <Menu onClick={buttonHandler} slide={showMenu ? "menu slide" : ""} />
        <Backdrop onClick={buttonHandler} slide={showMenu} />

    </>
};

export default Header;