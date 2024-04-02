import React, { useState } from "react";
import style from "./search.module.css"
import mGlass from "../../assets/svg/magnifyingGlass.svg";
import mic from "../../assets/svg/mic.svg";


const Search: React.FC = () => {
    const [formData, setFormData] = useState([]);


    return <div className={style.search}>

        <div className={style.formParent}>
            <img src={mGlass} alt="" />
            <form className={style.form} onClick={(e) => {

                e.preventDefault()
            }
            }>
                <input type="search" placeholder="Peanut, Bread, Oral B ... " className={style.formInput} />
            </form>
        </div>

        <div className={style.micParent}>
            <img src={mic} alt="mic" />
        </div>
    </div>

};

export default Search;