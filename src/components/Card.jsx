import React, { useState } from "react";
import Modal from "./Modal";

// Coupling: The modal should not be on the card. It should trigger a Reacrt portal -1
export default function Card({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card-container">
      <li>
        <div className={`active ${project.completed ? "inactive" : ""}`}>
          COMING SOON
        </div>
        <img onClick={() => setIsOpen(true)} src={project.image} />
        <h3>{project.title}</h3>
      </li>
      <Modal project={project} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
