import React, { useState } from "react";
import Message from "./Message";
import getDataFromServer from "./Data";
import moment from "moment";
import ReactScrollableFeed from "react-scrollable-feed";

const Chat = () => {
  const [oldData, setData] = useState("");
  const [state, setstate] = useState(getDataFromServer());

  const typeMsg = (event) => {
    setData(event.target.value);
  };

  const sendMsg = () => {
    if (oldData.trim() != "") {
      let details = {
        message: oldData,
        createdAt: moment().format(),
        sender: "user",
        _id: state.length + 1,
      };
      setstate((old) => {
        return [...old, details];
      });
    }
    setData("");
    // const element = document.querySelector(".msg-container");
    // console.log(element.scrollTop);
    // element.scrollTop = 500;
    // console.log(element.scrollTop);
  };
  console.log(state);

  const onsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="profile">
          <img
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            alt=""
            className="profile-pic"
          />
          <span className="profile-name">Agent</span>
        </div>
        <div className="messages">
          {/* <ReactScrollableFeed className="messages"> */}
          {state.map((msg_obj) => {
            return (
              <Message
                message={msg_obj.message}
                time={moment(msg_obj.createdAt).fromNow()}
                sender={msg_obj.sender}
              />
            );
          })}
          {/* </ReactScrollableFeed> */}
        </div>

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

export default Chat;
