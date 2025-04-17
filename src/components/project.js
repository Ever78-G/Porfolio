"use client";

import Image from "next/image";
import Buttonapp from "./button";
import { FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import stylebutton from "..//styles/button.module.css"
import styleproject from "../styles/project.module.css"
import buttonStyles  from "../styles/button.module.css"
import Titlecomponent from "./title";


const ProjectApp=({nameprject, description,github,link,imagen})=>{

    const handlesubmitgit=()=>{
        console.log("ingresa a la funcion ")
        window.open(github, "_blank");


    }

    const handlesubmitdemo=()=>{
        console.log("ingresa a la funcion ")
        window.open(link, "_blank");


    }
    return (
        
        <div className={styleproject.Bento_project}>

            <Titlecomponent title={nameprject} subtitle="Desarrollados en python"/>
            <div className={buttonStyles.container}>


                <div className={styleproject.imagen}>
                <Image src="/images.jpeg" alt="Logo" width={200} height={100}  />
                </div>
            

                <p className={styleproject.cuadro}>
                    {description}
                </p>
              

            </div>

           
            
            <div className={stylebutton.container}>
                
                <Buttonapp 
                value="GitGub"
                typeinput="button"
                onclicks={handlesubmitgit}
                icon={<FaGithub size={20}
                 />}

                />
                <Buttonapp
                value="Demo Live"
                typeinput="button"
                onclicks={handlesubmitdemo}
                icon={<FiSend size={20}/>}
                
                />
            </div>
            
        </div>
    )
}

export default ProjectApp;