import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowerCard">
      <h3>Who is Following you</h3>
      {Followers.map((followers) => (
        <div className="follower">
          <div>
            <img src={followers.img} alt="Follower" className="followerImg" />
            <div className="name">
              <span>{followers.name}</span>
              <span>@{followers.username}</span>
            </div>
          </div>
          <button className="button fc-btn">FOlLOW</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
