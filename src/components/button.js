"use client";
import PropTypes from "prop-types";
import styles from "../styles/button.module.css";
const Buttonapp = ({ typeinput = "submit", value = "", onclicks , icon}) => {

  return (
 //conolcar Estilos individuales para los bototones 
        <button className={styles.buttonstyles } type={typeinput} onClick={onclicks}>
            {icon}
            {value}
        </button>




  );
};

Buttonapp.propTypes = {
  typeinput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onclicks: PropTypes.func,
  className: PropTypes.string,
};

export default Buttonapp;
