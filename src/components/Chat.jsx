import useAppStore from "../config/MessageContext";

const Chat = () => {
  const message = useAppStore((state) => state.message);

  return (
    <>
      <div
        className="h-[85vh] relative overflow-auto scroll-smooth"
        id="chatContainer"
      >
        {message}
      </div>
    </>
  );
};

export default Chat;
