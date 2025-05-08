import { Button } from "@repo/ui/button";
import TextInput from "@repo/ui/text-input";
import React from "react";

const ChatRoom = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      ChatRoom
      <div>
      <TextInput placeholder="Enter the chat"/>
      <Button>Send</Button>
      </div>
    </div>
  );
};

export default ChatRoom;
