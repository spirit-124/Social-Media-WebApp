import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImage.jpg";
import { useSelector, useDispatch } from "react-redux";

const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const profilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfilecardImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Bajrang Kumar</span>
        <span>Full Stack Developer</span>
      </div>

      <div className="FollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
