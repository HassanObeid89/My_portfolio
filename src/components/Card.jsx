import React from "react";
export default function Card({ project }) {
  return (
    <div className="card-container">
      <li>
        <img src={project.image} />
        <h3>{project.title}</h3>
      </li>
    </div>
  );
}
