import style_skill from "../styles/competencies.module.css"
import Titlecomponent from "./title";

import { FaPython, FaJsSquare, FaNodeJs, FaReact,FaPhp } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const SkillItem= ({name,percentage,icons,level})=>{

    return(
        <div className={style_skill.skills}>
            <Titlecomponent  title={name}subtitle={level}icon={icons}/>
            <div className={style_skill.skill_bar}>
                <span className={style_skill.skill_per}
                style={{ width: `${percentage}%` }} >
                </span>

            </div>
            

        </div>
    )

}


const Skills = () => {

  const skillsData = [
    { 
      name: "Python", 
      percentage: 90, 
      level: "Experimentado", 
      icon: <FaPython size={25} style={{marginRight:"20px"}} /> 
    },
    { 
      name: "JavaScript", 
      percentage: 80, 
      level: "Intermedio", 
      icon: <FaJsSquare size={25} style={{marginRight:"20px"}} /> 
    },
    { 
      name: "Django", 
      percentage: 75, 
      level: "Intermedio", 
      icon: <SiDjango size={25} style={{marginRight:"20px"}} /> 
    },
    { 
      name: "PHP", 
      percentage: 70, 
      level: "Basico", 
      icon: <FaPhp size={30}style={{marginRight:"20px"}} /> 
    },
    {
      name: "React",
      percentage: 60,
      level: "Intermedio",
      icon: <FaReact size={25} style={{marginRight:"20px"}} />
    },
    {
      name: "MySQl",
      percentage: 70,
      level: "Básico",
      icon: <DiMysql size={30} style={{marginRight:"20px"}} />
    }
  ];

  return (
    <div className={style_skill.skills_container} id="skill">
      {skillsData.map((skill, index) => (
        <SkillItem
          key={index}
          name={skill.name}
          percentage={skill.percentage}
          icons={skill.icon}
          level={skill.level}
        />
      ))}
    </div>
  );
};



export default Skills;