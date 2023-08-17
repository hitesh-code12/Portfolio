import React, { useEffect, useState } from "react";
import  "./Navbar.scss";
import { Link } from "react-router-dom";
import { Hlogo,ham,openham } from "./../../assets";
import { useNavigate } from "react-router-dom";

import ContentWrapper from "./../contentWrapper/ContentWrapper";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <header  className="header">
      <ContentWrapper>
        <div className="navbarStyling">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Hlogo} alt="" style={{ width: "100px", height: "100px" }} />
        </div>
        <div className="masterName">HELLO!, I'M HITESH BHONKAR</div>
       {!active && <div onClick={()=>setActive(true)} className="hambergIcon" >
        <img src={ham} alt="" />

        </div>}
        </div>
        {
        active && <Sidebar setActive={setActive}/>
      }
      </ContentWrapper>
    
    </header>
  );
};

export default Navbar;
