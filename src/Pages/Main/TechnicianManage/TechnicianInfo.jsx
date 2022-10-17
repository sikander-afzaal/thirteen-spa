//ICON LIBRARY --------------------------------------
import {
  faChevronDown,
  faPlusCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechnicianInfo = () => {
  return (
    <div className="flex flex-col justify-end items-end w-full bg-[#313131] py-5 px-5 xl:px-14 rounded-2xl mt-8">
      <div className="grid gap-5 lg:gap-10 grid-cols-1  lg:grid-cols-[1fr_auto_1fr] w-full   h-full ">
        <div className="flex justify-start w-full items-start flex-col gap-3">
          <h2 className="mb-4 text-white text-[28px] font-normal">資訊</h2>
          <div className="flex justify-start items-start flex-col gap-4 w-full">
            <h2 className="text-[#8a9099] text-base border-b-[1px] border-solid w-full border-[#8a9099] pb-2">
              上班時間
            </h2>
            <div className="cursor-pointer flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full border-[#aeaeae]">
              <p className="text-white text-xs xl:text-sm ">
                星期一 11:30-23:59,星期二 11:30-23:59,星期三 11:30-23:59
              </p>
              <FontAwesomeIcon
                className="text-[#8A9099] text-xl"
                icon={faChevronDown}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 w-full mt-5">
            <div className="flex justify-between sm:flex-row flex-col items-start sm:items-center gap-3 w-full">
              <h3 className="text-[#8A9099] text-base font-normal">服務地區</h3>
              <div className="flex justify-center items-center gap-3">
                <div className="cursor-pointer flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[120px] border-[#aeaeae]">
                  <p className="text-white text-sm ">新北市</p>
                  <FontAwesomeIcon
                    className="text-[#8A9099] text-xl"
                    icon={faChevronDown}
                  />
                </div>
                <div className="cursor-pointer flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[120px] border-[#aeaeae]">
                  <p className="text-white text-sm ">大安區</p>
                  <FontAwesomeIcon
                    className="text-[#8A9099] text-xl"
                    icon={faChevronDown}
                  />
                </div>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="text-main-pink text-xl"
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 w-full flex-wrap">
              <div className="min-w-[84px] gap-5 flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
                <p className="text-[#242424] text-sm">台北市大安區</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#898989] text-xl"
                />
              </div>
              <div className="min-w-[84px] gap-5 flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
                <p className="text-[#242424] text-sm">台北市信義區</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#898989] text-xl"
                />
              </div>
              <div className="min-w-[84px] gap-5 flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
                <p className="text-[#242424] text-sm">台北市中山區</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#898989] text-xl"
                />
              </div>
            </div>
            <div className="flex justify-between sm:flex-row flex-col items-start sm:items-center gap-3 w-full">
              <h3 className="text-[#8A9099] text-base font-normal">服務地點</h3>
              <div className="flex justify-center items-center gap-3">
                <div className="cursor-pointer flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[120px] border-[#aeaeae]">
                  <p className="text-white text-sm ">新北市</p>
                  <FontAwesomeIcon
                    className="text-[#8A9099] text-xl"
                    icon={faChevronDown}
                  />
                </div>
                <div className="cursor-pointer flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[120px] border-[#aeaeae]">
                  <p className="text-white text-sm ">中正區</p>
                  <FontAwesomeIcon
                    className="text-[#8A9099] text-xl"
                    icon={faChevronDown}
                  />
                </div>
              </div>
            </div>
            <input
              placeholder="中正路1號"
              type="text"
              className="cursor-pointer self-end text-right flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-full sm:w-[80%] border-[#8A9099] bg-transparent"
            />
            <div className="flex justify-between sm:flex-row flex-col items-start sm:items-center gap-3 w-full">
              <h3 className=" text-[#8A9099] text-base font-normal">
                提供服務
              </h3>
              <div className="cursor-pointer  flex justify-end gap-3 p-3 items-center rounded-full border-[1px] border-solid w-full sm:w-[80%] border-[#aeaeae]">
                <p className="text-white text-sm ">選擇</p>
                <FontAwesomeIcon
                  className="text-[#8A9099] text-xl"
                  icon={faChevronDown}
                />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 w-full flex-wrap">
              <div className="min-w-[84px] gap-5 flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
                <p className="text-[#242424] text-sm">泰式按摩</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#898989] text-xl"
                />
              </div>
              <div className="min-w-[84px] gap-5 flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
                <p className="text-[#242424] text-sm">BB</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#898989] text-xl"
                />
              </div>
              <div className="min-w-[84px] gap-5 flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
                <p className="text-[#242424] text-sm">CC</p>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#898989] text-xl"
                />
              </div>
            </div>
            <div className="flex justify-between sm:flex-row flex-col items-start sm:items-center gap-3 w-full">
              <h3 className=" text-[#8A9099] text-base font-normal">
                服務方式
              </h3>
              <div className="flex justify-start items-center gap-4 flex-wrap">
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-main-pink bg-transparent"
                  />
                  <p className="text-white">到府服務</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-main-pink bg-transparent"
                  />
                  <p className="text-white">自行到店</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-main-pink bg-transparent"
                  />
                  <p className="text-white">自行聯絡</p>
                </div>
              </div>
            </div>
            <h3 className=" text-[#8A9099] text-base self-start my-3 font-normal">
              社群連結
            </h3>
            <div className="flex justify-start gap-3 sm:gap-10 items-center w-full">
              <img src="/fb.png" alt="" />
              <input
                placeholder="請輸入連結"
                type="text"
                className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[100%] border-[#8A9099] bg-transparent"
              />
            </div>
            <div className="flex justify-start gap-3 sm:gap-10 items-center w-full">
              <img src="/inst.png" alt="" />
              <input
                placeholder="請輸入連結"
                type="text"
                className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[100%] border-[#8A9099] bg-transparent"
              />
            </div>
            <div className="flex justify-start gap-3 sm:gap-10 items-center w-full">
              <img src="/li.png" alt="" />
              <input
                placeholder="請輸入連結"
                type="text"
                className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[100%] border-[#8A9099] bg-transparent"
              />
            </div>
            <div className="flex justify-start gap-3 sm:gap-10 items-center w-full">
              <img src="/msg.png" alt="" />
              <input
                placeholder="請輸入連結"
                type="text"
                className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[100%] border-[#8A9099] bg-transparent"
              />
            </div>
            <div className="flex justify-start gap-3 sm:gap-10 items-center w-full">
              <img src="/twitter.png" alt="" />
              <input
                placeholder="請輸入連結"
                type="text"
                className="cursor-pointer  flex justify-between p-3 items-center rounded-full border-[1px] border-solid w-[100%] border-[#8A9099] bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className="w-[2px] bg-light-gray h-full"></div>
        <div className="w-full flex flex-col justify-start items-center gap-4">
          <div className="flex justify-start items-start flex-col gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#898989] text-sm font-normal">技師簡介</h2>
              <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
            </div>
            <textarea className="w-full h-[300px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
          </div>
          <div className="flex justify-start items-start flex-col gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#898989] text-sm font-normal">最新公告</h2>
              <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
            </div>
            <textarea className="w-full h-[110px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
          </div>
          <div className="flex justify-start items-start flex-col gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#898989] text-sm font-normal">預約須知</h2>
              <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
            </div>
            <textarea className="w-full h-[110px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
          </div>
          <div className="flex justify-start items-start flex-col gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#898989] text-sm font-normal">
                預約成功注意事項
              </h2>
              <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
            </div>
            <textarea className="w-full h-[110px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
          </div>
          <div className="flex justify-start items-start flex-col gap-3 w-full">
            <div className="flex justify-between items-center w-full">
              <h2 className="text-[#898989] text-sm font-normal">
                取消注意事項
              </h2>
              <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
            </div>
            <textarea className="w-full h-[110px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 items-center w-full justify-end mt-5  sm:mt-20 mb-5">
        <button className="text-[#898989] text-lg bg-white rounded-full h-12 w-full sm:w-[200px]">
          黑名單
        </button>
        <button className="text-white text-lg bg-main-pink rounded-full h-12 w-full sm:w-[200px]">
          總機聊天室
        </button>
        <button className="text-white text-lg bg-main-pink rounded-full h-12 w-full sm:w-[200px]">
          儲存修改
        </button>
      </div>
    </div>
  );
};

export default TechnicianInfo;
