import React, { useState } from "react";
import Modal from "./Modal";
export default function Card({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card-container">
      <li>
        <div className={`active ${project.completed ? "inactive" : ""}`}>
          COMMING SOON
        </div>
        <img onClick={() => setIsOpen(true)} src={project.image} />
        <h3>{project.title}</h3>
      </li>
      <Modal project={project} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
