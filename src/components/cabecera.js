import styles from "../styles/cabecera.module.css" 
import buttonStyles  from "../styles/button.module.css"
import Image from "next/image";
import Buttonapp from "./button";
import { FiSend } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import Titlecomponent from "./title";



function Descripcion(){

    return(
        <div>
            <div className={styles.Bento_print} id="home">
                <div className={styles.imagen}>
                    <Image src="/logo_ever.png" alt="Logo" width={200} height={100}  />
                </div>
                <article>
                    <Titlecomponent title={"Ever Giraldo Guerrero"} subtitle={"Developer Backend"}/>
                    <p> Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed at orci nec metus sagittis fermentum. Vestibulu
                        m ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel sapien a orci vulputate vehicula.
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed at orci nec metus sagittis fermentum. Vestibulum ante 
                    </p> Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed at orci nec metus sagittis fermentum. Vestibulum ante 
                </article>
                
                <div className={buttonStyles.container}>
                    <Buttonapp
                        value="Contacto"
                        icon={<FiSend size={20} />}
                        className={styles.button_contacto}
                    />
                    <Buttonapp
                        value="Currículo"
                        icon={<FaDownload size={20}  className={buttonStyles.prueba}/>}
                        className={styles.button_cv}
                        
                    />
                </div>
            </div>
        </div>
    )
}
export default Descripcion;