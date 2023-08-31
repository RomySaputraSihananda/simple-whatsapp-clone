import { useEffect, useState } from "react";
import useAppStore from "../config/MessageContext";
import {
  IconFaceSmile,
  IconCameraFill,
  IconLink,
  IconMic,
  IconPaperPlane,
} from "./icons/icons";
import BoobleChat from "./BoobleChat";
import { socket } from "../socket";

const fontColor = "#69767F";
const iconColor = "#DFE7EA";

const InputChat = () => {
  const [messageFirst, setMessageFirst] = useState("");
  const [onInput, setOnInput] = useState(false);

  const handleInput = (isi) => {
    setMessageFirst(isi);
    if (!isi) return setOnInput(false);
    return setOnInput(true);
  };

  const handleMessage = (event) => {
    if (event) event.preventDefault();
    if (!messageFirst) return;
    setMessage(
      <BoobleChat
        props={{ chat: messageFirst, type: "me" }}
        key={messageFirst}
      />
    );
    setMessageFirst("");
    setOnInput(false);
    socket.emit("chat", messageFirst);
  };

  const setMessage = useAppStore((state) => state.setMessage);

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
  });

  return (
    <div className="flex px-1 w-hp">
      <div className="flex p-3 rounded-full bg-nav w-full mr-5 justify-between items-center">
        <IconFaceSmile fill={fontColor} className="w-1/12 mr-3 " />
        <form
          action=""
          method="post"
          onSubmit={handleMessage}
          className="font-mono w-9/12"
        >
          <input
            type="text"
            value={messageFirst}
            onInput={(event) => {
              handleInput(event.target.value);
            }}
            placeholder="Message"
            autoFocus
            className="bg-nav focus:outline-none font-mono w-full text-msg-font"
          />
          <input type="submit" hidden />
        </form>
        {!onInput ? (
          <>
            <IconLink fill={fontColor} className="w-1/12" />
            <IconCameraFill fill={fontColor} className="w-1/12 ml-3" />
          </>
        ) : (
          <IconLink fill={fontColor} className="w-1/12" />
        )}
      </div>
      <div className="flex justify-center items-center w-[60px] bg-ijo rounded-full cursor-pointer">
        {!onInput ? (
          <IconMic fill={iconColor} onClick={() => alert("sabar ")} />
        ) : (
          <IconPaperPlane
            fill={iconColor}
            onClick={() => {
              handleMessage();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InputChat;
