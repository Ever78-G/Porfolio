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
import Script from 'next/script';

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
      <Script
        type="module"
        src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
        onLoad={() => {
          window.voiceflow.chat.load({
            verify: { projectID: '680689dac58d040f72dae89e' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: 'https://runtime-api.voiceflow.com',
            },
          });
        }}
      />

   




    </div>
  );
}
