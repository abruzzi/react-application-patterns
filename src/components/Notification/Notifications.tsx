import React from "react";
import { useNotification } from "./NotificationContext";

import "./notification.css";

const Notifications = () => {
  const { removeMessage, messages } = useNotification();

  const handleRemove = (message: string) => {
    removeMessage(message);
  }
  return (
    <div className="notificationContainer">
      <ol>
        {messages.map((message, index) => (
          <li key={index}>
            <div className="notificationItem">
              <span>{message}</span>
              <button onClick={() => handleRemove(message)}>x</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Notifications;
