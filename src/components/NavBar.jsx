import Logo from "../assets/logo.svg";
export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <a href="#hero">
          <img src={Logo} />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#tech">Tech</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
