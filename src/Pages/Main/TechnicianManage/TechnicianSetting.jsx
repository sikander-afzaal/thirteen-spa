import { useState } from "react";

const TechnicianSetting = () => {
  const [tab, setTab] = useState("緊急通知");
  const NAVLINK__STYLES =
    "cursor-pointer text-center  w-[60px] sm:w-[90px] pb-3 border-b-[3px]  border-solid text-xs sm:text-sm";
  return (
    <div className="bg-[#313131] rounded-2xl mt-8 w-full flex justify-start items-start flex-col px-14 py-8 gap-8">
      <div className="flex justify-start items-center gap-1">
        <p
          className={`${NAVLINK__STYLES} ${
            tab === "緊急通知"
              ? "border-main-pink text-main-pink"
              : "text-[#8A9099]"
          } `}
        >
          緊急通知
        </p>
        <p
          className={`${NAVLINK__STYLES} ${
            tab === "推播通知"
              ? "border-main-pink text-main-pink"
              : "text-[#8A9099]"
          }`}
        >
          推播通知
        </p>
        <p
          className={`${NAVLINK__STYLES} ${
            tab === "線上預約設定"
              ? "border-main-pink text-main-pink"
              : "text-[#8A9099]"
          }`}
        >
          線上預約設定
        </p>
      </div>
      <h3 className="text-[#8A9099] text-sm font-normal border-b-[1px] border-solid border-[#8A9099] pb-2 w-full">
        狀況一
      </h3>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex justify-start items-center gap-4 w-full">
            <h3 className="text-[#8A9099] w-[50px] text-sm font-normal">
              狀況
            </h3>
            <div className="flex justify-start w-full gap-5 border-b-[1px] border-solid border-[#8A9099] pb-3 items-center ">
              <div className="flex justify-center items-center gap-2">
                <input
                  type="radio"
                  name="setting-radio"
                  className="accent-main-pink"
                />
                <p className="text-sm text-white">個人危險發生</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <input
                  type="radio"
                  name="setting-radio"
                  className="accent-main-pink"
                />
                <p className="text-sm text-white">特殊狀況發生</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full"></div>
      </div>
    </div>
  );
};

export default TechnicianSetting;
