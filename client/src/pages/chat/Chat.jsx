import React, { useEffect, useState } from "react";
import "./Chat.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { LogoSearch } from "../../components";
import { useSelector } from "react-redux";
import { userChat } from "../../api/ChatRequest";
import Conversation from "../../components/conversation/Conversation";
import { Link } from "react-router-dom";
import ChatBox from "../../components/ChatBox/ChatBox";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log(user);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChat(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);
  return (
    <div className="Chat">
      {/* Left Side====================================== */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <Conversation data={chat} currentUser={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right-side===================================== */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="navIcons">
            <Link to="../home">
              <img src={Home} alt="" />
            </Link>
            <UilSetting />
            <img src={Noti} alt="" />
            <Link to="../chat">
              <img src={Comment} alt="" />
            </Link>
          </div>
          {/* Chat Body  */}
        </div>
        <ChatBox chat={currentChat} currentUser={user._id}></ChatBox>
      </div>
    </div>
  );
};

export default Chat;
