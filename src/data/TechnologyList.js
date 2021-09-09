import { GrReactjs } from "react-icons/gr";
import {
  SiTypescript,
  SiPhp,
  SiFirebase,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

// Coupling: Data files only should contain data no React code.  -1
export const TechnologyList = [
  {
    name: "React",
    logo: <GrReactjs style={{ fontSize: "50px" }} />,
  },
  {
    name: "JavaScript",
    logo: <SiJavascript style={{ fontSize: "50px" }} />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript style={{ fontSize: "50px" }} />,
  },
  {
    name: "SASS",
    logo: <FaSass style={{ fontSize: "50px" }} />,
  },
  {
    name: "Firebase Auth",
    logo: <SiFirebase style={{ fontSize: "50px" }} />,
  },
  {
    name: "FireStore",
    logo: <SiFirebase style={{ fontSize: "50px" }} />,
  },
  {
    name: "CloudStorage",
    logo: <SiFirebase style={{ fontSize: "50px" }} />,
  },
  {
    name: "React-native",
    logo: <GrReactjs style={{ fontSize: "50px" }} />,
  },
  {
    name: "PHP",
    logo: <SiPhp style={{ fontSize: "50px" }} />,
  },
  {
    name: "Postgresql",
    logo: <SiPostgresql style={{ fontSize: "50px" }} />,
  },
];
