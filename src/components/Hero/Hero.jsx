import React from "react";
import ContentWrapper from "./../contentWrapper/ContentWrapper";
import { profile } from "./../../assets";
import "./Hero.scss";
const Hero = () => {
  return (
    <div>
      <ContentWrapper>
        
        <div className="infoPortfolio">

          <div className="Info">
            <div className="Summary">
              Highly motivated and skilled Software Developer with experience in
              building responsive and user-friendly web applications using
              React.js and related technologies. Passionate about solving
              complex problems and dedicated to delivering innovative solutions.
              Seeking opportunities to contribute my expertise and grow
              professionally.
            </div>
          </div>
          <div className="profileImg">
          <img
            src={profile}
          ></img>
          </div>
          
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
