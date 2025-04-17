import style_skill from "../styles/competencies.module.css"
import Titlecomponent from "./title";
import { skillsData } from "../../data";

const SkillItem= ({name,percentage,icons,level})=>{

    return(
        <div className={style_skill.skills} >
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


  return (
    <div className={style_skill.skills_container} >
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