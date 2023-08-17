import React from "react";

function Sidebar({ setActive }) {
  return (
    <div
      style={{
        width: "25%",
        minHeight: "730px",
        backgroundColor: "black",
        opacity: "0.6",
        position: "absolute",
        right: "0",
        top: "0",
      }}
    >
      <div>
      <div style={{position:"absolute",right:"0",margin:"16px"}} onClick={()=>setActive(false)}> X</div>
      <div style={{padding:"20px"}}>
        <div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
