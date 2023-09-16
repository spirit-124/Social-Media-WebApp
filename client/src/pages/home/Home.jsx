import React from "react";
import "./Home.css";
import { ProfileSide, PostSide } from "../../components";
import RightSide from "../../components/rightSide/RightSide";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
