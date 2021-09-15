import { TechnologyList } from "../data/TechnologyList";
import TechItem from "./TechItem";

export default function TechSection() {
  const Technologies = TechnologyList.map((item) => <TechItem key={item.id} item={item} />);
  return (
    <div className="tech-container" id="tech">
      <h2>Technologies I use</h2>
      <div className="tech-content">
        <p>
          Here is the techology that I already know and also starting to learn.
        </p>
        <ul>{Technologies}</ul>
      </div>
    </div>
  );
}
