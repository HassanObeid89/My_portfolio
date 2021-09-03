import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact me</h2>
      <p>
        Here is my contact information if you are interested in starting a
        collaboration.
      </p>
      <ul>
        <li>
          <HiOutlineMail />
          <label>hassan.obeid.ho@hotmail.com</label>
        </li>
        <li>
          <AiOutlinePhone />
          <label>+46 76 585 6630</label>
        </li>
        <li>
          <GoLocation />
          <label>Stockholm, Sweden</label>
        </li>
      </ul>
      
      <footer className="footer">
        <ul>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaGithubSquare />
          </li>
        </ul>

        <small>© 2021 - Hassan Obeid</small>
      </footer>
    </div>
  );
}
