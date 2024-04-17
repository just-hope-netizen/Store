import { useQuery } from "@tanstack/react-query";
import { Response } from "../../types/Api.types";
import axios from "axios";
import { Product } from "../../types/product.types";
import style from "./categoryCard.module.css";

type Props = {
    data: Product[] | undefined
}

const CategoryCard: React.FC<Props> = (props: Props) => {

    return <div className={style.btnParent}>
        {props.data?.map(
            (i: Product) =>
                <button key={i.productId} className={`icon-btn ${style.btn}`}
                >
                    {i.category}
                </button>
        )}</div>


}
export default CategoryCard;