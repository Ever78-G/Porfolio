"use client";

import Image from "next/image";
import Buttonapp from "./button";
import { FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import stylebutton from "..//styles/button.module.css"
import styleproject from "../styles/project.module.css"
import buttonStyles  from "../styles/button.module.css"
import Titlecomponent from "./title";
import Link from "next/link";


const ProjectApp=({nameprject, description,github,link})=>{


    const handlesubmit=()=>{
        console.log("ingresa a la funcion ")
        window.open("https://www.netflix.com/browse", "_blank");


    }
    return (
        
        <div className={styleproject.Bento_project}>

            <Titlecomponent title={nameprject} subtitle="Desarrollados en python"/>
            <div className={buttonStyles.container}>


                <div className={styleproject.imagen}>
                <Image src="/images.jpeg" alt="Logo" width={200} height={100}  />
                </div>
            

                <p className={styleproject.cuadro}>
                Este proyecto consiste en una aplicación web tipo dashboard diseñada para ayudar a los usuarios a gestionar y visualizar sus gastos personales de manera clara y eficiente. Su objetivo principal es brindar una herramienta intuitiva para llevar control de los ingresos, egresos y presupuestos mensuales.
                </p>
              

            </div>

           
            
            <div className={stylebutton.container}>
                
                <Buttonapp 
                value="GitGub"
                typeinput="button"
                onclicks={handlesubmit}
                icon={<FaGithub size={20}
                 />}

                />
                <Buttonapp
                value="Demo Live"
                icon={<FiSend size={20}/>}
                
                />
            </div>
            
        </div>
    )
}

export default ProjectApp;