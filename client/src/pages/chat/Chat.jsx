import React, { useEffect, useState } from "react";
import "./Chat.css";
import { LogoSearch } from "../../components";
import { useSelector } from "react-redux";
import { userChat } from "../../api/ChatRequest";
import Conversation from "../../components/conversation/Conversation";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log(user);
  const [chats, setChats] = useState([]);

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
  }, []);
  return (
    <div className="Chat">
      {/* Left Side====================================== */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div>
                <Conversation data={chat} currentUser={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right-side===================================== */}
      <div className="Right-side-chat">Right side</div>
    </div>
  );
};

export default Chat;
