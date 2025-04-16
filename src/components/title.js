import PropTypes from "prop-types";
import style from "../styles/title.module.css"

import { FaPython } from "react-icons/fa";

const Titlecomponent= ({title,subtitle,icon})=>{


    return(
        <div className={style.title_container}>
            <h1 className={style.title_main} >
                {icon}

                {title}
            </h1>
            <h4 className={style.title_sub}>
                {subtitle}
            </h4>
        </div>
    )
}

Titlecomponent.prototype={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}

export default Titlecomponent;