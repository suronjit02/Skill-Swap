import React from "react";
import logo from "../assets/Logo.jpg";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-base-content p-10 border-t border-green-200">
      <aside className="">
        <img className="h-10" src={logo} alt="" />
        <h3 className="font-semibold">A Local Skill Exchange Platform</h3>
        <p>
          SkillSwap is your local hub to learn, <br /> share, and exchange
          skills. <br />
          Connect, explore, and grow together.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Contact Info</h6>
        <a className="link link-hover">Email: contact@skillswap.com</a>
        <a className="link link-hover">Phone: +880 123 456 789</a>
        <a className="link link-hover">Address: Dhaka, Bangladesh (example)</a>
      </nav>

      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Skills</a>
        <a className="link link-hover">My Profile</a>
        <a className="link link-hover">Login / Signup</a>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover flex items-center gap-2 text-lg">
          <FaFacebookSquare />
          Facebook
        </a>
        <a className="link link-hover flex items-center gap-2 text-lg">
          <FaSquareInstagram />
          Instagram
        </a>
        <a className="link link-hover flex items-center gap-2 text-lg">
          <FaLinkedin />
          LinkedIn
        </a>
      </nav>

      {/* © 2025 SkillSwap. All rights reserved. */}
    </footer>
  );
};

export default Footer;
