import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TechSection from "./components/TechSection";
import ContactSection from "./components/ContactSection";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
        <NavBar />
        
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechSection />
        <ContactSection />
  
    </div>
  );
}
