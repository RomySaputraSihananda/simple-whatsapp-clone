import { Home, ChatRoom, Login } from "./views/views";
import { socket } from "./socket";
import { useState } from "react";
import BoobleChat from "./components/BoobleChat";
import useAppStore from "./config/MessageContext";

const App = () => {
  const setMessage = useAppStore((state) => state.setMessage);

  useState(() => {
    socket.on("newChat", (message) => {
      setMessage(
        <BoobleChat props={{ chat: message, type: "other" }} key={message} />
      );
    });
  }, []);

  return (
    // <div className="bg-backg w-hp h-screen m-auto bg-bgChat bg-cover">
    <div className="bg-backg w-hp h-screen m-auto ">
      <ChatRoom />
      {/* <Home /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
