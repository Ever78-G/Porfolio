"use client";

import Descripcion from "@/components/cabecera";
import ProjectApp from "@/components/project";
import styleporject from "../styles/project.module.css"
import NavbarTest from "@/components/nabvar";
import Titlecomponent from "@/components/title";
import ProjectSlider from "@/components/projectslider";
import Skills from "@/components/competencies";

export default function Home() {
  return (
    <div>  
      <NavbarTest />
      
      <Descripcion />

     
      <Titlecomponent title="Proyectos" subtitle="Porfolio" />
      <ProjectSlider />

      <h1 style={{textAlign:"center"}}>Skill</h1> 
      <div className={styleporject.project_container}>
        <Skills/>
        <Skills/>
        <Skills/>
        <Skills/>
        <Skills/>


      </div>


    </div>
  );
}
