import Card from "./Card";
import { data } from "../data/ProjectsList";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection({ setModal }) {
  const cards = data.map((project) => (
    <Card project={project} onClick={() => setProject(project)} />
  ));

  function setProject(project) {
    setModal(<ProjectModal project={project} />);
  }
  return (
    <div className="project-container" id="projects">
      <h2>Projects</h2>
      <div className="project-content">
        <p>
          Here are the projects I will be making during the Frontend course at
          Novare Potential.
        </p>
        <ul>{cards}</ul>
      </div>
    </div>
  );
}
