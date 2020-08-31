import React from "react";

/**
 * Return messages list
 * @param {object=} messages Messages list from Firebase DB
 */

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages !== null &&
        Object.keys(messages).map((item) => (
          <div key={item} id={item} className="chat-message">
            {messages[item]}
          </div>
        ))}
    </div>
  );
};

export default ChatWindow;
