import { useState } from "react";
//ICON LIBRARY------------------------------
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="header gap-6 bg-[#313131] flex pr-8 items-center justify-end h-20 w-full">
      <div className="xl:flex hidden bg-transparent border-light-gray border-solid border-[1px] rounded-2xl  gap-3 items-center justify-center py-3 px-4">
        <p className="text-white text-sm">店家到期日</p>
        <p className="text-gray-text text-lg font-medium">2022/12/31</p>
      </div>
      <div className="xl:flex hidden bg-transparent border-light-gray border-solid border-[1px] rounded-2xl  gap-3 items-center justify-center py-3 px-4">
        <p className="text-white text-sm">剩餘月數</p>
        <p className="text-gray-text text-lg font-medium">100</p>
      </div>
      <div className="relative h-full flex justify-center items-center gap-3 ml-5">
        <FontAwesomeIcon className="text-gray-text text-xl" icon={faBell} />
        <p className="text-white select-none">Sarah</p>
        <FontAwesomeIcon
          onClick={() => setDropDown((prev) => !prev)}
          className="text-gray-text text-xl ml-4 cursor-pointer"
          icon={faChevronDown}
        />
        <div
          className={`absolute right-0 py-[20px] top-[110%] bg-[#313131]  rounded-2xl shadow-black  justify-center items-start flex-col ${
            dropDown ? "flex" : "hidden"
          } lg:w-[190px] w-[300px]`}
        >
          <p className="pl-5 pb-5 text-white">
            Sarah <br /> <span className="text-[#aeaeae] text-xs">管理員</span>
          </p>
          <div className="xl:hidden flex bg-transparent w-[95%] mx-auto my-4 flex-col border-light-gray border-solid border-[1px] rounded-2xl  gap-3 items-center justify-center py-3 ">
            <p className="text-white text-sm">店家到期日</p>
            <p className="text-gray-text text-lg font-medium">2022/12/31</p>
          </div>
          <div className="xl:hidden flex bg-transparent w-[95%] mx-auto my-4 flex-col border-light-gray border-solid border-[1px] rounded-2xl  gap-3 items-center justify-center py-3 ">
            <p className="text-white text-sm">剩餘月數</p>
            <p className="text-gray-text text-lg font-medium">100</p>
          </div>
          <div className="pt-[15px] pl-[20px] flex justify-start items-center gap-4 w-full border-t-[1px] border-solid border-t-[#484848]">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-[#aeaeae] text-lg"
            />
            <p className="text-[#aeaeae]">登出</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
