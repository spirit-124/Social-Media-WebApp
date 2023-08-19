import React from "react";
import "./Home.css";
import { ProfileSide } from "../../components";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="RightSide">Right</div>
    </div>
  );
};

export default Home;
