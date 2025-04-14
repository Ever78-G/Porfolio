import PropTypes from "prop-types";
import style from "../styles/title.module.css"


const Titlecomponent= ({title,subtitle})=>{


    return(
        <div className={style.title_container}>
            <h1 className={style.title_main}>
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