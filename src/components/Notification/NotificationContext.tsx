import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export type MessageType = {
  id: string;
  content: string;
};

export type NotificationType = {
  messages: MessageType[];
  addMessage: (message: string, level?: "information" | "error") => void;
  removeMessage: (message: string, level?: "information" | "error") => void;
};

export const NotificationContext = createContext<NotificationType>({
  messages: [],
  addMessage: (message: string) => {},
  removeMessage: (message: string) => {},
});

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const removeMessage = (id: string) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  const addMessage = (message: string) => {
    setMessages([{ id: uuid(), content: message }, ...messages]);
  };

  return (
    <NotificationContext.Provider
      value={{ messages, addMessage, removeMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
