"use client";

import Descripcion from "@/components/cabecera";
import ProjectApp from "@/components/project";
import styleporject from "../styles/project.module.css"
import NavbarTest from "@/components/nabvar";
import Titlecomponent from "@/components/title";
import ProjectSlider from "@/components/projectslider";
import Skills from "@/components/competencies";
import style_skill from "../styles/competencies.module.css"
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>  
      <NavbarTest  id="home"/>
      
      <Descripcion />
      <Titlecomponent title="Trabajos Recientes" subtitle="Porfolio"  id="project"/>
      <ProjectSlider />
      <Titlecomponent title="Tech Skills" subtitle="Competencias"  id="skill"/>
      <Skills  />
      <Titlecomponent title="Ponte en contacto conmigo" subtitle="Mis Contactos"/>

      <Contact/>

   




    </div>
  );
}
