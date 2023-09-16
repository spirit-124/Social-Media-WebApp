import Profile from "../../img/profileImage.jpg";
import { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({ image: URL.createObjectURL(img) });
    }
  };

  return (
    <>
      <div className="PostShare">
        <img src={Profile} alt="Profile " />
        <div>
          <input type="text " placeholder="What's happening?" />
          <div className="PostOptions">
            <div
              className="options"
              style={{ color: "var(--photo)" }}
              onClick={() => {
                imageRef.current.click();
              }}
            >
              <UilScenery />
              Photo
            </div>
            <div className="options" style={{ color: "var(--location)" }}>
              <UilLocationPoint />
              Location
            </div>
            <div className="options" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>
            <div className="options" style={{ color: "var(--shedule)" }}>
              <UilSchedule />
              Schedule
            </div>
            <div className="button ps-button">Share</div>
            <div style={{ display: "none" }}>
              <input
                type="file"
                ref={imageRef}
                name="myImage"
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
              <UilTimes
                onClick={() => {
                  setImage(null);
                }}
              />
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
