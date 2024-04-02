import React from "react";
import style from "./header.module.css"
import logo from "../../assets/svg/logo.svg";
import menu from "../../assets/svg/menu.svg";
import user from "../../assets/svg/user.svg";

const Header: React.FC = () => {
    return <header className={style.header}>
        <div className={style.imgsParent}>
            <button className={style.menuParent}>
                <img src={menu} alt="menu" className="" />
            </button>
            <img src={logo} alt="logo" className={style.logo} />
            <img src={user} alt="" />
        </div>

    </header>
};

export default Header;