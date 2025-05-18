import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]); // Store all messages
  const [chatActive, setChatActive] = useState(false); // Toggle chat visibility
  const inputRef = useRef(null); // Reference to the input field
  const messagesEndRef = useRef(null); // Scroll to the latest message

  // Toggle chat visibility
  const toggleChatbox = () => setChatActive((prev) => !prev);

  // Send message function
  const sendMessage = async () => {
    const text = inputRef.current.value.trim(); // Get the input text
    if (!text) return; // If the message is empty, do nothing

    // Add the user's message first
    const newMessages = [...messages, { name: "User", message: text }];
    setMessages(newMessages);
    inputRef.current.value = ""; // Clear the input field

    try {
      // Send the user's message to the server
      const response = await fetch("https://laysans-solutions-api.onrender.com/chatai/", {
        method: "POST",
        body: JSON.stringify({ message: text }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data?.answer) {
        // Add Tesla's reply below the user's message
        setMessages((prevMessages) => [
          ...prevMessages,
          { name: "Tesla", message: data.answer },
        ]);
      }
    } catch (error) {
      console.error("Chat API Error:", error);
    }
  };

  // Send message when Enter key is pressed
  const handleKeyUp = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Scroll to the latest message after every update
  useEffect(() => {
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbox">
      <div className={`chatbox__support ${chatActive ? "chatbox--active" : ""}`}>
        <div className="chatbox__header">
          <div className="chatbox__image--header">
            <img
              src="./Static/chatbot/images (1).jpeg"
              style={{ height: "60px", width: "auto", borderRadius: "50%" }}
              alt="Chatbot"
            />
          </div>
          <div className="chatbox__content--header">
            <h4 className="chatbox__heading--header">Custom Chat Support</h4>
            <p className="chatbox__description--header">
              Hi, I am Chatbot Tesla. How can I help you?
            </p>
          </div>
        </div>
<div className="chatbox__messages">
  {[...messages].reverse().map((msg, index) => (
    <div
      key={index}
      className={`messages__item ${
        msg.name === "User" ? "messages__item--operator" : "messages__item--visitor"
      }`}
    >
      {msg.message}
    </div>
  ))}
  <div ref={messagesEndRef} />
</div>

        <div className="chatbox__footer">
          <input
            type="text"
            placeholder="Write a message..."
            ref={inputRef}
            onKeyUp={handleKeyUp}
          />
          <button className="chatbox__send--footer send__button" onClick={sendMessage}>
            <i className="fa-solid fa-paper-plane h5"></i>
          </button>
        </div>
      </div>

      <div className="chatbox__button">
        <button onClick={toggleChatbox}>
          <img src="./Static/chatbot/chatbox-icon.svg" alt="Chat Toggle" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
