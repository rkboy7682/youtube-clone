import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center border border-slate-300 m-1 p-1 rounded-lg shadow-lg">
      <img
        className="h-10 m-1 py-2"
        alt="userlogo"
        src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
