import React, { useState } from "react";
import style from "./search.module.css"
import mGlass from "../../assets/icons/magnifyingGlass.svg";
import mic from "../../assets/icons/mic.svg";
import axios from "axios";
import { Product } from "../../types/product.types";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/services/getProductData";



const Search: React.FC = () => {
    const [formData, setFormData] = useState<string>("");

    // const query = useQuery({ queryKey: ['products'], queryFn: fetchProducts });
    // console.log(query.data);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFormData(e.target.value);
        queryServer()
    }

    const queryServer = async () => {
        try {

            const reponse = await axios.get<Product>("http://localhost:8080/api/v1/search?q=" + formData)
            console.log(reponse)
        } catch (error) {

        }
    }

    return <div className={style.search}>

        <div className={style.formParent}>
            <img src={mGlass} alt="" />
            <form className={style.form} >
                <input type="text" name="search" placeholder="Peanut, Bread, Oral B ... "
                    className={style.formInput}
                    onChange={
                        onChangeHandler
                    }
                />
            </form>
        </div>

        <div className={style.micParent}>
            <img src={mic} alt="mic" />
        </div>
    </div>

};

export default Search;