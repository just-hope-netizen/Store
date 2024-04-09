import { MouseEventHandler } from "react";
import style from "./backdrop.module.css";

type Props = {
    slide: boolean;
    onClick: MouseEventHandler
}

const Backdrop = (props: Props) => {

    return <div className={`${style.backdrop} ${props.slide ? style.slide : undefined}`}
        onClick={props.onClick}> </div>;
}
export default Backdrop;

