import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Snippet</span>
        <span className="headerTitleLg">blog01</span>
      </div>
      <img
        className="headerImg"
        src="https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/RESIZED-Bengal-hill-station-Sandakphu-outlook-traveller.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
