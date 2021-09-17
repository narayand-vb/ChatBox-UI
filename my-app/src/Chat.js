import React, { useState } from "react";
import Message from "./Message";
import getDataFromServer from "./Data";
import botmsg from "./Bot";
import moment from "moment";
import ReactScrollableFeed from "react-scrollable-feed";

const Chat = () => {
  const [oldData, setData] = useState("");
  const [state, setstate] = useState(getDataFromServer());

  const typeMsg = (event) => {
    setData(event.target.value);
  };

  const sendMsg = () => {
    if (oldData.trim() !== "") {
      let msgObj = {
        message: oldData,
        createdAt: moment().format(),
        sender: "user",
        _id: state.length + 1,
      };
       setstate((old) => {
        return [...old, msgObj];
      });

      // Bot to send message. Here botmsg is importing data from Bot.js and it will be sended to user as agent after 2 second.
      setTimeout(async () => {
      let bot_msg ={
        message : await botmsg(oldData),
        createdAt: moment().format(),
          sender: "agent",
          _id: state.length + 2,
      }
      setstate((old) => {
        return [...old, bot_msg];
      });
    }, 2000);
  }
    setData("");
  };

  const onsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    {/* All the html are written in JSX */}
      <div className="container">
        {/* Profile : It contain profile pic and name */}
        <div className="profile">
          <img
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            alt=""
            className="profile-pic"
          />
          <span className="profile-name">Agent</span>
        </div>
        {/* Messaages : It will contain all the messages only */}
        <div className="messages">
          <div className="inhert">
            {/* ReactScrollableFeed is use to scroll the messages automatically */}
          <ReactScrollableFeed className="messages">
            {/* Map method is sending the data of every message to Message component */}
          {state.map((msg_obj) => {
            return (
              <Message
                key = {msg_obj._id}
                message={msg_obj.message}
                time={moment(msg_obj.createdAt).fromNow()}
                sender={msg_obj.sender}
              />
            );
          })}
          </ReactScrollableFeed>
          </div>
        </div>
          {/* Form contain input where user can type message and button to send message */}
          <form action="" className="input-btn" onSubmit={onsubmit}>
            <input
              type="text"
              name="msg"
              placeholder="Enter your message"
              value={oldData}
              onChange={typeMsg}
            />
            <button type="submit" className="send" onClick={sendMsg}>
              Send
            </button>
          </form>
      </div>
    </>
  );
};

// Exporting the Chat to App.js
export default Chat;
