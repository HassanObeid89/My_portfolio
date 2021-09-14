import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TechSection from "./components/TechSection";
import ContactSection from "./components/ContactSection";
import ModalContainer from "./components/ModalContainer";
import "./App.css";

export default function App() {
  const [modal, setModal] = useState(null)
  return (
    <div className="App">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection setModal={setModal} />
        <TechSection />
        <ContactSection />
        <ModalContainer modal={modal} setModal={setModal} />
    </div>
  );
}
