import React from "react";
import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";
export default function Modal({ open, onClose, project }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overLay" onClick={onClose} />
      <div className="modal-container">
        <div className='header'>
        <FaWindowClose
          style={{ fontSize: "30px" }}
          className="icon"
          onClick={onClose}
        />
        <img src={project.image} />
        </div>
        <div className="content-wrapper">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.pills.map((pill) => (
              <li>{pill}</li>
            ))}
          </ul>

          <div className="btn-container">
            <button className="app-btn">Visit website/app</button>
            <button className="git-btn">Git repository</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
