import { useEffect, useState } from "react";
import { getUser } from "../../api/UserRequest";
import "./ChatBox.css";

const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);

  //   fetching data for headers
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat != null) getUserData();
  }, [chat, currentUser]);
  return (
    <div className="ChatBox-container">
      <>
        <div className="chat-header"></div>
        <div className="follower">
          <div>
            <img
              src={
                userData?.profilePicture
                  ? process.env.REACT_APP_PUBLIC_FOLDER +
                    userData.profilePicture
                  : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.jpg"
              }
              alt="Profile"
              className="followerImage"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="name" style={{ fontSize: "0.8rem" }}>
              <span>
                {userData?.firstname}
                {userData?.lastname}
              </span>
            </div>
          </div>
          <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </div>
      </>
    </div>
  );
};

export default ChatBox;
