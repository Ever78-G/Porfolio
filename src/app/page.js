"use client";

import Descripcion from "@/components/cabecera";
import ProjectApp from "@/components/project";
import styleporject from "../styles/project.module.css"
import NavbarTest from "@/components/nabvar";
import Titlecomponent from "@/components/title";
import ProjectSlider from "@/components/projectslider";
import Skills from "@/components/competencies";
import style_skill from "../styles/competencies.module.css"

export default function Home() {
  return (
    <div>  
      <NavbarTest />
      
      <Descripcion />

     
      <Titlecomponent title="Proyectos" subtitle="Porfolio" />
      <ProjectSlider />
      <Titlecomponent title="Tech Skills" subtitle="Competencias" />
      <Skills />


      <div className={style_skill.skills_container} id="skill">
        <p>jajdjajdshdshahdhasdadgjasdadshdghasdghasghdghasghdasdhasdhadsgh</p>
      </div>

   




    </div>
  );
}
