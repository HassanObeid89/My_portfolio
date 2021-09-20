import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact me</h2>
      <div className="contact-content">
        <p>
          Here is my contact information if you are interested in starting a
          collaboration.
        </p>
        <ul>
          <li>
            <HiOutlineMail />
            <label>
              <a href="mailto:hassan.obeid.ho@hotmail.com">
                hassan.obeid.ho@hotmail.com
              </a>
            </label>
          </li>
          <li>
            <AiOutlinePhone />
            <label>
              <a href="tel:+46765856630">+46 76 585 6630</a>
            </label>
          </li>
          <li>
            <GoLocation />
            <label>Stockholm, Sweden</label>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/hasse-obeid-975bb4158/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/HassanObeid89"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
        </ul>
        <small>© 2021 - Hassan Obeid</small>
      </footer>
    </div>
  );
}
