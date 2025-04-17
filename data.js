import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";
import { FaPython, FaJsSquare, FaNodeJs, FaReact,FaPhp } from "react-icons/fa";
import { SiDjango  } from "react-icons/si";
import { DiMysql } from "react-icons/di";



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#project",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#skill",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];



export const projects = [
    {
      nameprject: "Finanzas App",
      description: "Este proyecto consiste en una aplicación web tipo dashboard diseñada para ayudar a los usuarios a gestionar y visualizar sus gastos personales de manera clara y eficiente. Su objetivo principal es brindar una herramienta intuitiva para llevar control de los ingresos, egresos y presupuestos mensuales.",
      github: "https://www.youtube.com/watch?v=wrXXzkVTYNA&list=PLIYMPyQKkYSbagChUjs05rBvwsA7ooOeU",
      link: "https://react-icons.github.io/react-icons/search/#q=project"
    },
    {
      nameprject: "Gestor de tareas",
      description: "Este proyecto consiste en una aplicación web tipo dashboard diseñada para ayudar a los usuarios a gestionar y visualizar sus gastos personales de manera clara y eficiente. Su objetivo principal es brindar una herramienta intuitiva para llevar control de los ingresos, egresos y presupuestos mensuales.",
      github: "#",
      link: "#"
    },
    {
      nameprject: "Blog Personal",
      description: "Este proyecto consiste en una aplicación web tipo dashboard diseñada para ayudar a los usuarios a gestionar y visualizar sus gastos personales de manera clara y eficiente. Su objetivo principal es brindar una herramienta intuitiva para llevar control de los ingresos, egresos y presupuestos mensuales.",
      github: "#",
      link: "#"
    }
  ];
  




export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 314 260 25 29",
        link: "tel:+573142608529",
        icon: <Phone  size={25}  />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/EverG",
        link: "https://github.com/Ever78-G",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "evegiralov@gmail.com",
        link: "mailto:evegiralov@gmail.com",
        icon: <Inbox />,
    },
];



export const skillsData = [
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