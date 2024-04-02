import React from "react";
import style from "./hero.module.css"
import hero from "../../assets/images/hero.webp";


const Hero: React.FC = () => {
    return <section className={""}>
        <div className={style.heroParent}>
            <h1 className={style.heroText}>Get new notes when <br /> you withdrawal from <br /> Mama Fred.</h1>
            <img src={hero} alt="" className={style.heroImg} />

        </div>

    </section>
};

export default Hero;