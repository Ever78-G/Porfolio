"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styleporject from "../styles/project.module.css"
import ProjectApp from "./project";

const projects = [
  {
    nameprject: "Finanzas App",
    description: "App para control de gastos personales",
    github: "#",
    link: "#"
  },
  {
    nameprject: "Gestor de tareas",
    description: "App para gestionar tareas pendientes",
    github: "#",
    link: "#"
  },
  {
    nameprject: "Blog Personal",
    description: "Blog desarrollado en Next.js",
    github: "#",
    link: "#"
  }
];

const ProjectSlider = () => {
  return (
    <div className={styleporject.project_container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectApp
              nameprject={project.nameprject}
              description={project.description}
              github={project.github}
              link={project.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
