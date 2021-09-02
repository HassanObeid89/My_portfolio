import React from "react";
import Card from "./Card";
import {data} from '../data/Projects';


export default function ProjectsSection() {
console.log()
  return (
    <div className='project-container' id="projects">
      <h2>Projects</h2>
      <p>Here are the projects I will be making during the Frontend course at Novare Potential.</p>
      <ul>
        {data.map((project) => <Card project={project}/> )}
        
      </ul>
    </div>
  );
}
