import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Logo from "../assets/logo-1.png";

export default function NavBar() {
  return (
    <nav>
      <div className="bar">
        <Link smooth to="#about">
          About
        </Link>
        <Link smooth to="#projects">
          Projects
        </Link>
        <span>
          <Link smooth to="#hero">
            <img src={Logo} />
          </Link>
        </span>
        <Link smooth to="#tech">
          Tech
        </Link>
        <Link smooth to="#contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
