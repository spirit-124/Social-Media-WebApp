import React from "react";
import "./Home.css";
import { ProfileSide, PostSide } from "../../components";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <div className="RightSide">Right</div>
    </div>
  );
};

export default Home;
