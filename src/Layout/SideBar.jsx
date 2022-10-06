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
  const navLinkStyle = `hover:border-main-pink hover:bg-bg-black text-[#A8ABBD] h-[76px] text-xl w-full pl-5 flex items-center justify-start gap-3 border-l-[3px] border-solid`;
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="sidebar bg-[#313131] w-full h-full flex item-center justify-start flex-col">
      <div
        onClick={() => setOpenSideBar(false)}
        className={`xl:hidden z-10 bg-black opacity-60 fixed top-0 left-0 h-screen w-full ${
          openSideBar ? "block" : "hidden"
        }`}
      ></div>
      <div className="h-[80px] flex w-full items-center justify-start pl-5 xl:justify-center">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setOpenSideBar(true)}
          className="xl:hidden block  text-white text-2xl mr-5 cursor-pointer"
        />
        <img src="/icon.png" alt="" />
      </div>
      <div
        className={`xl:static fixed flex items-start justify-start w-full xl:max-w-none max-w-[400px] z-20 ${
          openSideBar ? "left-0" : "-left-[600px] "
        } xl:bg-transparent bg-[#313131] xl:h-auto h-screen top-[0px] flex-col xl:transition-none transition-all`}
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setOpenSideBar(false)}
          className="xl:hidden block self-end p-5 text-white text-2xl cursor-pointer"
        />
        <NavLink
          onClick={() => setOpenSideBar(false)}
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/"}
        >
          <FontAwesomeIcon className="w-6 h-6" icon={faUser} />
          會員管理
        </NavLink>
        <NavLink
          onClick={() => setOpenSideBar(false)}
          className={({ isActive }) =>
            isActive
              ? `border-main-pink bg-bg-black ${navLinkStyle}`
              : `${navLinkStyle} border-transparent`
          }
          to={"/home/technician-manage"}
        >
          <img className="w-6 h-6" src="/user-girl.svg" />
          技師管理
        </NavLink>
        <NavLink
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
          onClick={() => setOpenSideBar(false)}
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
