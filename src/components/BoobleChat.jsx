import { useEffect, useState } from "react";

const BoobleChat = ({ props }) => {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const h = new Date();

    const add0 = (num) => {
      if (num < 10) {
        num = "0" + num;
        return num;
      } else {
        return num;
      }
    };

    let clock = ` ${add0(h.getHours())}:${add0(h.getMinutes())}`;
    setClock(clock);
  }, []);

  if (props.type === "me") {
    return (
      <div className="flex justify-end">
        <div className="bg-nav w-fit h-fit rounded-xl px-2 py-1 m-2 ">
          <span className="text-sm text-msg-font">You</span>
          <p className="text-msg-font">
            {props.chat}{" "}
            <span className="text-sm ml-1 text-nav-font">{clock}</span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="bg-nav w-fit h-fit rounded-xl px-2 py-1 m-2">
        <span className="text-sm text-msg-font">other</span>
        <p className="text-msg-font">
          {props.chat}{" "}
          <span className="text-sm ml-1 text-nav-font">{clock}</span>
        </p>
      </div>
    </div>
  );
};

export default BoobleChat;
