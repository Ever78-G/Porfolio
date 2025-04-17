import styles from "../styles/cabecera.module.css" 
import buttonStyles  from "../styles/button.module.css"
import Image from "next/image";
import Buttonapp from "./button";
import { FiSend } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import Titlecomponent from "./title";


function Descripcion(){
    const handleOpenCV = () => {
        window.open('/Ever_Giraldo_HV.pdf', '_blank');
      };
    const handlecontac= () => {
        window.open('https://www.linkedin.com/in/ever-giraldo-guerrero-8275a1332/', '_blank');

    };
      

    return(
        <div>
            <div className={styles.Bento_print}  id="home">
                <div className={styles.imagen}>
                    <Image src="/logo_ever.png" alt="Logo" width={200} height={100}  />
                </div>
                <article>
                    <Titlecomponent title={"Ever Giraldo Guerrero"} subtitle={"Developer Backend"}/>
                    <p> 
                    Desarrollador backend en formación, enfocado en la construcción de soluciones robustas, eficientes y escalables. Cuento con experiencia práctica en el desarrollo de aplicaciones web utilizando Django y Python, así como en la gestión de bases de datos con MySQL. Tengo conocimientos en control de versiones con Git y despliegue de entornos mediante Docker. Me caracterizo por ser una persona responsable, proactiva y orientada al detalle, con un fuerte compromiso por la mejora continua y la aplicación de buenas prácticas de desarrollo.


                    </p> 
                </article>
                
                <div className={buttonStyles.container}>
                    <Buttonapp
                        value="Contacto"
                        icon={<FiSend size={20} />}
                        className={styles.button_contacto}
                        onclicks={handlecontac}
                    />
                    <Buttonapp
                        value="Currículo"
                        icon={<FaDownload size={20}  className={buttonStyles.prueba}/>}
                        className={styles.button_cv}
                        onclicks={handleOpenCV}
                        
                        
                    />
                </div>
            </div>
        </div>
    )
}
export default Descripcion;