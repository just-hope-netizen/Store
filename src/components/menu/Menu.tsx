import { IconButton } from "../iconButton";
import style from "./menu.module.css";
import homeIcon from "../../assets/icons/home.svg";
import dashIcon from "../../assets/icons/dashboard.svg";
import { Link } from "react-router-dom";

type Props = {
    onClick: () => void;
    slide?: string
};

const Menu = (props: Props) => {

    return (
        <>
            <div
                className={`flex-row ${props.slide ? style.slide : ""} ${style.menu} `}
            >
                <nav className="width">

                    <ul>
                        <li className={style.link} onClick={props.onClick}>
                            <Link to={"/"} className="flex-row align" >
                                <IconButton src={homeIcon} alt={"home icon"} onClick={props.onClick} className={style.icon} />
                                Home
                            </Link>

                        </li>
                        <li className={style.link} onClick={props.onClick}>
                            <Link to={"/"} className="flex-row align" >
                                <IconButton src={dashIcon} alt={"home icon"} onClick={props.onClick} className={style.icon} />
                                Home
                            </Link>

                        </li>

                    </ul>
                </nav>

                {/* // <Nav className='mobile-nav' /> */}
            </div>
        </>
    );
};
export default Menu;