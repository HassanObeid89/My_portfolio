import hero from "../assets/hero_4.jpg";
export default function HeroSection() {
  return (
    <div id="hero" className="hero-container">
      <img src={hero} />
      <section className="slogen">
        <h1>Hasse Obeid, </h1>
        <p>Aspiring Front-End developer</p>
      </section>
    </div>
  );
}
