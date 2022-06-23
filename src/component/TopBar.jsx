import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className="topIcon  fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About </li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
          alt="profile pic"
        />

        {/* <i className="topSearchIcon fa-solid fa-user"></i> */}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
