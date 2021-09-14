export default function Card({ project, onClick }) {
  return (
    <div className="card-container">
      <li>
        <div className={`active ${project.completed ? "inactive" : ""}`}>
          COMING SOON
        </div>
        <img onClick={onClick} src={project.image} />
        <h3>{project.title}</h3>
      </li>
    </div>
  );
}
