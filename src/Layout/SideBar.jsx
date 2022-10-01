import { useState } from "react";
//ICON LIBRARY--------------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faUser,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faClipboardUser,
  faListCheck,
  faStore,
  faUserGear,
  faVolumeHigh,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
//React Router Dom
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const navLinkStyle = ` text-[#A8ABBD] h-[76px] text-lg w-full pl-5 flex items-center justify-start gap-3 border-l-[3px] border-solid`;
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="sidebar bg-[#313131] w-full h-full flex item-center justify-start flex-col">
      <div
        onClick={() => setOpenSideBar(false)}
        className={`lg:hidden z-10 bg-black opacity-60 fixed top-0 left-0 h-screen w-full ${
          openSideBar ? "block" : "hidden"
        }`}
      ></div>
      <div className="h-[80px] flex w-full items-center justify-center">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setOpenSideBar(true)}
          className="lg:hidden block  text-white text-2xl mr-5 cursor-pointer"
        />
        <img src="/icon.png" alt="" />
      </div>
      <div
        className={`lg:static fixed flex items-start justify-start w-full lg:max-w-none max-w-[400px] z-20 ${
          openSideBar ? "left-0" : "-left-[600px] "
        } lg:bg-transparent bg-[#313131] lg:h-auto h-screen top-[0px] flex-col lg:transition-none transition-all`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setOpenSideBar(false)}
          className="lg:hidden block self-end p-5 text-white text-2xl cursor-pointer"
        />
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faUser} />
          會員管理
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/technician"}
        >
          <img className="w-6 h-6" src="/user-girl.svg" />
          技師管理
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/project"}
        >
          <img className="w-6 h-6" src="/page.svg" />
          客製化項目
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/order"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faClipboardUser} />
          訂單管理
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/schedule"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faListCheck} />
          班表管理
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/technician-status"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faUserGear} />
          技師狀態管理
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/chat-room"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faMessage} />
          聊天室管理
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/technician-chat-room"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faUserCircle} />
          技師聊天室
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/store-chat-room"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faStore} />
          店家聊天室
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/emergency"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faVolumeHigh} />
          技師緊急通知
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
