import React, { createContext, useContext, useState } from "react";

export type NotificationType = {
  messages: string[];
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
  const [messages, setMessages] = useState<string[]>([]);

  const removeMessage = (message: string) => {
    setMessages(messages.filter((m) => m !== message));
  };

  const addMessage = (message: string) => {
    setMessages([message, ...messages]);
  };

  return (
    <NotificationContext.Provider
      value={{ messages, addMessage, removeMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
