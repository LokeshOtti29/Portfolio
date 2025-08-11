import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiC,
  SiFramer,
  SiDocker,
  SiVercel,
  SiBootstrap,
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa"; 
import { IconType } from "react-icons";

export interface Skill {
  icon: IconType;
  name: string;
  colorClass?: string; 
}

export const skills: Skill[] = [
  { icon: SiC, name: "C", colorClass: "text-blue-600" },
  {icon: FaJava, name:"Java", colorClass: "text-red-600"},
  {icon: FaMicrosoft, name:"C#", colorClass: "text-green-600"},
  { icon: SiHtml5, name: "HTML", colorClass: "text-orange-600" },
  { icon: SiCss3, name: "CSS", colorClass: "text-blue-500" },
  { icon: SiJavascript, name: "JavaScript", colorClass: "text-yellow-500" },
  { icon: SiTypescript, name: "TypeScript", colorClass: "text-blue-600" },
  { icon: SiNextdotjs, name: "Next.js", colorClass: "text-black" },
  { icon: SiTailwindcss, name: "TailwindCSS", colorClass: "text-sky-500" },
  { icon: SiReact, name: "React.js", colorClass: "text-sky-400" },
  { icon: SiNodedotjs, name: "Node.js", colorClass: "text-green-600" },
  { icon: SiExpress, name: "Express.js", colorClass: "text-black" },
  { icon: SiDotnet, name: ".NET", colorClass: "text-violet-700" },
  { icon: SiMongodb, name: "MongoDB", colorClass: "text-green-700" },
  { icon: SiMysql, name: "MySQL", colorClass: "text-blue-600" },
  { icon: SiFramer, name: "Framer Motion", colorClass: "text-pink-500" },
  { icon: SiDocker, name: "Docker", colorClass: "text-blue-500" },
  { icon: SiVercel, name: "Vercel", colorClass: "text-black" },
  { icon: SiBootstrap, name: "Bootstrap", colorClass: "text-purple-600" },
];
