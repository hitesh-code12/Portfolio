import React from "react";
import "./Tech.scss";
import { resume } from "./../../assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
// import {company,reactjs,redux,git,javascript} from "./../../assets"
import Card from "../Card/Card";
import ContentWrapper from "../contentWrapper/ContentWrapper";
const Tech = () => {
  return (
    <ContentWrapper>
      <div className="container">
        <div className="resume">
        <a
          href={resume}
          download="Hitesh_bhonkar_Frontend_Developer"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          Checkout my resume
        </a>
        </div>
       
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
          <a
              href="https://twitter.com/bhonkar_hitesh"
              target="_blank"
              rel="noreferrer"
            >
            <FaTwitter />
          </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/hitesh-bhonkar-847596128/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
        <div className="Contact">
          Contact me here!
          <div >
            <label className="label">Email:</label><span>hitesh.bhonkar98@gmail.com</span>
          </div>
          <div>
            <label  className="label">Phone:</label><span>8390278873</span>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Tech;
