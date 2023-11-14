import React, { useRef, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useNotification } from "./NotificationContext";

import "./notification.css";

const Notifications = () => {
  const { removeMessage, messages } = useNotification();

  const nodeRefs = useRef(new Map()).current;

  messages.forEach((message) => {
    if (!nodeRefs.has(message.id)) {
      nodeRefs.set(message.id, React.createRef());
    }
  });

  const handleRemove = (message: string) => {
    removeMessage(message);
  };

  return (
    <div className="notificationContainer">
      <TransitionGroup component="ol">
        {messages.map((message, index) => (
          <CSSTransition
            key={message.id}
            timeout={500}
            classNames="item"
            in
            nodeRef={nodeRefs.get(message.id)}
          >
            <li key={index} ref={nodeRefs.get(message.id)}>
              <div className="notificationItem">
                <span>{message.content}</span>
                <button onClick={() => handleRemove(message.id)}>x</button>
              </div>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Notifications;
