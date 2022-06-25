import React from "react";
import "./home.css";
import Header from "../../header/header";
import Post from "../../posts/post";
import SideBar from "../../sideBar/sideBar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
