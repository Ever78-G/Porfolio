"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styleporject from "../styles/project.module.css"
import ProjectApp from "./project";
import {projects} from "../../data"


const ProjectSlider = () => {
  return (
    <div className={styleporject.project_container}  >
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
