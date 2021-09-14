export default function ProjectModal({ project }) {
  const { image, title, description, pills } = project;
  const pill = pills.map((pill) => <li>{pill}</li>);
  return (
    <div className="modal-project">
        <div className="header">
          <img src={image} />
        </div>
        <div className="content-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>{pill}</ul>
        <div className="btn-container">
          <button className="app-btn">Visit website/app</button>
          <button className="git-btn">Git repository</button>
        </div>
      </div>
    </div>
  );
}
