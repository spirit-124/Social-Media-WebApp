import Profile from "../../img/profileImage.jpg";
import { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { UploadImage, uploadPost } from "../../actions/UploadActions";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  // const { user } = useSelector((state) => state.authReducer.authdata);
  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = " ";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);

      try {
        dispatch(UploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <>
      <div className="PostShare">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="Profile "
        />
        <div>
          <input
            type="text "
            placeholder="What's happening?"
            ref={desc}
            required
          />
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
            <div
              className="button ps-button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Share"}
            </div>
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
              <img src={URL.createObjectURL(image)} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
