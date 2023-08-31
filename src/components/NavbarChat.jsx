import {
  ArrowLeft,
  IconCall,
  IconVideoCall,
  IconThreeDots,
} from "./icons/icons";
import avatar from "../assets/avatar.jpeg";

const fontColor = "#DFE7EA";

const NavbarChat = () => {
  return (
    <nav className="flex items-center p-3 bg-nav">
      <ArrowLeft fill={fontColor} />
      <img src={avatar} alt="avatar" className="rounded-full w-16" />
      <div className="w-7/12 flex-col ml-6">
        <h1 className="text-xl font-semibold text-msg-font">GRUB ISLAMIC ☪️</h1>
        <p className="text-sm text-msg-font">tap here for group info</p>
      </div>
      <div className="flex justify-between w-5/12">
        <IconVideoCall fill={fontColor} />
        <IconCall fill={fontColor} />
        <IconThreeDots fill={fontColor} />
      </div>
    </nav>
  );
};

export default NavbarChat;
