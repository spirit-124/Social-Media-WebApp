import React, { useEffect, useState } from "react";

const Conversation = ({ data, currentUser }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUser);
    console.log(userId);
    const getUserData = async () => {
      // const { data } = await getUser(userId);
      setUserData(data);
    };
  }, []);

  return <div>Conversation</div>;
};

export default Conversation;
