import profile from "../assets/Hassan_obeid.jpg";

export default function AboutSection() {
  return (
    <div id="about" className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi! I’m Hassan, a junior frontend developer. This is my website, which
          I use to showcase everything I develop. I specialize in React
          development with a minimalist design and attention to detail. Why do I
          need minimalistic design and attention to detail, you might ask? Well,
          scroll down and let me convince you.
        </p>
        <img
          src={profile}
          alt="A guy with big eyes, short beard and black shirt "
        />
      </div>
    </div>
  );
}
