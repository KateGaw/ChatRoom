import React, { useState, useEffect } from "react";
import './App.css';
import * as firebase from "firebase";
import ChatWindow from "./components/ChatWindow";

/**
 * Main function, return chat window
 *
 * @param {object} db Firebase Database
 * @param {object=} messages all messages from db
 * @param {string} text text of the current message
 */

const App = () => {
  const db = firebase.database();
  const [messages, setMessages] = useState(null);
  const [text, setText] = useState("");

  /**
   * Set database data to messages variable
   */
  useEffect(() => {
    const mess = db.ref("messages");
    mess.on("value", (elem) => {
      setMessages(elem.val());
    });
  }, [db]);

  /**
   * Calls when send button clicked
   * Sends new message to db and clear textarea field
   */
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setText("");
    db.ref("messages").push(text);
  };

  return (
    <div className="chat">
      <ChatWindow messages={messages} />
      <form onSubmit={onSubmitHandler} className="chat-input_form">
        <textarea
          value={text}
          className="chat-textarea"
          onChange={(event) => setText(event.target.value)}
        />
        <input type="submit" value="Send" className="chat-submit_button" />
      </form>
    </div>
  );
};

export default App;
