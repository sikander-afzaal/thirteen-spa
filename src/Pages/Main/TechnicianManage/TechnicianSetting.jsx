import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
//Components ----------------------
import ToggleBtn from "../../../Components/ToggleBtn";

const TechnicianSetting = () => {
  const [tab, setTab] = useState("緊急通知");
  const NAVLINK__STYLES =
    "cursor-pointer text-center w-[90px] pb-3 border-b-[3px]  border-solid text-xs sm:text-sm";
  return (
    <div className="bg-[#313131] rounded-2xl mt-8 w-full flex justify-start items-start flex-col px-5 sm:px-14 py-8 gap-8">
      <div className="flex justify-start items-center gap-1 w-full">
        <p
          onClick={(e) => setTab(e.target.innerText)}
          className={`${NAVLINK__STYLES} ${
            tab === "緊急通知"
              ? "border-main-pink text-main-pink"
              : "text-[#8A9099]"
          } `}
        >
          緊急通知
        </p>
        <p
          onClick={(e) => setTab(e.target.innerText)}
          className={`${NAVLINK__STYLES} ${
            tab === "推播通知"
              ? "border-main-pink text-main-pink"
              : "text-[#8A9099]"
          }`}
        >
          推播通知
        </p>
        <p
          onClick={(e) => setTab(e.target.innerText)}
          className={`${NAVLINK__STYLES} ${
            tab === "線上預約設定"
              ? "border-main-pink text-main-pink"
              : "text-[#8A9099]"
          }`}
        >
          線上預約設定
        </p>
      </div>
      {/* First Tab --------------------------------------------- */}
      {tab === "緊急通知" && (
        <>
          <h3 className="text-[#8A9099] text-sm font-normal border-b-[1px] border-solid border-[#8A9099] pb-2 w-full">
            狀況一
          </h3>
          <div className="flex gap-14 lg:flex-row flex-col  justify-start items-start w-full">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start sm:flex-row flex-col items-start sm:items-center gap-4 w-full">
                <h3 className="text-[#8A9099] w-[50px] text-sm font-normal">
                  狀況
                </h3>
                <div className=" flex justify-start flex-col sm:flex-row w-full gap-5 border-b-[1px] border-solid border-[#8A9099] pb-3 items-start sm:items-center ">
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
              <div className="flex justify-start mt-8 items-start flex-col gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-[#898989] text-sm font-normal">說明</h2>
                  <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
                </div>
                <textarea className="w-full h-[110px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
              </div>
              <div className="flex justify-start mt-8 items-start gap-3 flex-col w-full">
                <h3 className="text-[#8A9099] w-full text-sm font-normal">
                  聯絡人一
                </h3>
                <input
                  placeholder="名稱"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
                <input
                  placeholder="電話"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-start gap-3 w-full">
                <h3 className="text-[#8A9099] pt-2 text-sm w-[80px] font-normal">
                  觸發方式
                </h3>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <div className="gap-3 w-full flex border-b-[1px] border-solid border-[#8A9099] justify-start items-center px-2 py-2">
                    <input
                      type="radio"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">搖一搖</p>
                  </div>
                  <div className="gap-3 w-full flex border-b-[1px] border-solid border-[#8A9099] justify-start items-center px-2 py-2">
                    <input
                      type="radio"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">音量鍵＋號</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start mt-6 gap-3 w-full">
                <h3 className="text-[#8A9099] pt-2 text-sm w-[80px] font-normal">
                  觸發功能
                </h3>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <div className="gap-3 w-full flex  justify-start items-center px-2 pb-2">
                    <input
                      type="checkbox"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">停用技師帳號</p>
                  </div>
                  <div className="gap-3 w-full flex  justify-start items-center px-2 pb-2">
                    <input
                      type="checkbox"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">
                      停用服務進行中的客戶帳號
                    </p>
                  </div>
                  <div className="gap-3 w-full flex  justify-start items-center px-2 pb-2">
                    <input
                      type="checkbox"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">清除聊天記錄</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-8 items-start gap-3 flex-col w-full">
                <h3 className="text-[#8A9099] w-full text-sm font-normal">
                  聯絡人二
                </h3>
                <input
                  placeholder="名稱"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
                <input
                  placeholder="電話"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
              </div>
            </div>
          </div>
          <h3 className="text-[#8A9099] text-sm font-normal mt-10 sm:mt-20 border-b-[1px] border-solid border-[#8A9099] pb-2 w-full">
            狀況二
          </h3>
          <div className="flex gap-14 lg:flex-row flex-col  justify-start items-start w-full">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-start flex-col sm:flex-row sm:items-center gap-4 w-full">
                <h3 className="text-[#8A9099] w-[50px] text-sm font-normal">
                  狀況
                </h3>
                <div className="flex justify-start flex-col sm:flex-row w-full gap-5 border-b-[1px] border-solid border-[#8A9099] pb-3 items-start sm:items-center ">
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
              <div className="flex justify-start mt-8 items-start flex-col gap-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-[#898989] text-sm font-normal">說明</h2>
                  <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
                </div>
                <textarea className="w-full h-[110px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
              </div>
              <div className="flex justify-start mt-8 items-start gap-3 flex-col w-full">
                <h3 className="text-[#8A9099] w-full text-sm font-normal">
                  聯絡人一
                </h3>
                <input
                  placeholder="名稱"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
                <input
                  placeholder="電話"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-start gap-3 w-full">
                <h3 className="text-[#8A9099] pt-2 text-sm w-[80px] font-normal">
                  觸發方式
                </h3>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <div className="gap-3 w-full flex border-b-[1px] border-solid border-[#8A9099] justify-start items-center px-2 py-2">
                    <input
                      type="radio"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">搖一搖</p>
                  </div>
                  <div className="gap-3 w-full flex border-b-[1px] border-solid border-[#8A9099] justify-start items-center px-2 py-2">
                    <input
                      type="radio"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">音量鍵＋號</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start mt-6 gap-3 w-full">
                <h3 className="text-[#8A9099] pt-2 text-sm w-[80px] font-normal">
                  觸發功能
                </h3>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                  <div className="gap-3 w-full flex  justify-start items-center px-2 pb-2">
                    <input
                      type="checkbox"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">停用技師帳號</p>
                  </div>
                  <div className="gap-3 w-full flex  justify-start items-center px-2 pb-2">
                    <input
                      type="checkbox"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">
                      停用服務進行中的客戶帳號
                    </p>
                  </div>
                  <div className="gap-3 w-full flex  justify-start items-center px-2 pb-2">
                    <input
                      type="checkbox"
                      className="accent-main-pink"
                      name="trigger"
                    />
                    <p className="text-white text-sm">清除聊天記錄</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mt-8 items-start gap-3 flex-col w-full">
                <h3 className="text-[#8A9099] w-full text-sm font-normal">
                  聯絡人二
                </h3>
                <input
                  placeholder="名稱"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
                <input
                  placeholder="電話"
                  type="text"
                  className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#8A9099] bg-transparent"
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* Second Tab ----------------------------------------------- */}
      {tab === "推播通知" && (
        <>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-14 items-start mt-5 w-full">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[#8A9099] text-sm">E-mail 推播通知 </h3>
              <ToggleBtn />
            </div>
            <div className="w-[2px] h-[200px] bg-light-gray"></div>
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[#8A9099] text-sm flex items-center justify-center gap-3">
                預約前提醒{" "}
                <FontAwesomeIcon
                  className="bg-main-pink w-6 h-6 rounded-full box-border  text-white"
                  icon={faQuestionCircle}
                />
              </h3>
              <input
                type="text"
                placeholder="分"
                className="text-[#898989] text-right rounded-full w-full max-w-[121px] h-[42px] px-3 bg-transparent border-solid border-[1px] border-[#898989]"
              />
            </div>
          </div>
        </>
      )}
      <button className="text-white mt-7 self-end text-lg bg-main-pink rounded-full h-12 w-full sm:w-[200px]">
        儲存修改
      </button>
    </div>
  );
};

export default TechnicianSetting;
