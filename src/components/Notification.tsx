import React from "react";

const Notification: React.FC<{ message: string | null }> = ({ message }) => {
  return <div>{message}</div>;
};

export default Notification;
