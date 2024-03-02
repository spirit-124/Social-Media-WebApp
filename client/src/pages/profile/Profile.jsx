import React from "react";
import "./Profile.css";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import FollowersCard from "../../components/FollowersCard/FollowersCard";
import InfoCard from "../../components/InfoCard/InfoCard";
import RightSide from "../../components/rightSide/RightSide";
// import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location=" profilePage" />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;
