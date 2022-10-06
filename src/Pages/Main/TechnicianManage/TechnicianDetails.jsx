//ICON LIBRARY------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faCheckCircle,
  faCopy,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
//Components -------------
import CtaBtn from "../../../Components/CtaBtn";
import ToggleBtn from "../../../Components/ToggleBtn";

const TechnicianDetails = () => {
  return (
    <div className="grid gap-6 lg:gap-0 grid-cols-1 lg:grid-cols-2 flex-col bg-[#313131] py-5 px-5 sm:px-14 w-full rounded-2xl mt-8">
      <div className="flex w-full justify-start border-none lg:border-r-[1px] lg:pr-9 lg:border-solid border-light-gray items-center lg:items-start flex-col">
        <h2 className="mb-4 text-white text-[28px] font-normal">頭像</h2>
        <img src="/test-user.png" alt="" />
        <h2 className="text-white mt-4 text-[28px] font-normal">狀態</h2>
        <div className="py-3 mt-5 border-b-[1px] border-light-gray flex justify-between items-center w-full">
          <input
            type="text"
            placeholder="帳戶狀態（啟用 / 停用）"
            className="focus:outline-none w-full  text-[#8a9099] bg-transparent text-base font-normal border-none"
          />
          <ToggleBtn />
        </div>
        <div className="py-3 mt-5 border-b-[1px] border-light-gray flex justify-between items-center w-full">
          <input
            type="text"
            placeholder="技師轉會員"
            className="focus:outline-none w-full  text-[#8a9099] bg-transparent text-base font-normal border-none"
          />
          <CtaBtn name={"轉換"} />
        </div>
        <div className="py-3 mt-5 border-b-[1px] border-light-gray flex justify-between items-center w-full">
          <input
            type="text"
            placeholder="禁止預約"
            className="focus:outline-none w-full  text-[#8a9099] bg-transparent text-base font-normal border-none"
          />
          <ToggleBtn />
        </div>
        <div className="py-3 mt-5 border-b-[1px] border-light-gray flex justify-between items-center w-full">
          <p className="text-[#8a9099] text-base font-normal">登入綁定</p>
          <div className="flex items-start gap-5 sm:flex-row flex-col sm:items-center">
            <div className="flex justify-start items-center gap-1">
              <img src="/facebook.png" alt="" />
              <p className="text-xs text-white">Facebook</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <img src="/google.png" alt="" />
              <p className="text-xs text-white">Google</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <img src="/line.png" alt="" />
              <p className="text-xs text-white">Line</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 mt-8 w-full">
          <label className="text-base text-[#898989] font-normal">標籤</label>
          <div className="gap-3 flex justify-start items-center w-full">
            <input
              type="text"
              placeholder="新增標籤"
              className="focus:outline-none w-full pr-3 text-[#898989] bg-transparent text-base rounded-full h-10 text-right border-[1px] border-[#898989] border-solid "
            />
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="text-main-pink text-3xl cursor-pointer"
            />
          </div>
          <div className="flex justify-start items-center gap-3 w-full flex-wrap">
            <div className="min-w-[84px] flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
              <p className="text-[#242424] text-sm">AA</p>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-[#898989] text-xl"
              />
            </div>
            <div className="min-w-[84px] flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
              <p className="text-[#242424] text-sm">BB</p>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-[#898989] text-xl"
              />
            </div>
            <div className="min-w-[84px] flex justify-between items-center px-3 py-2 border-solid border-[1px] border-main-pink bg-white rounded-full">
              <p className="text-[#242424] text-sm">CC</p>
              <FontAwesomeIcon
                icon={faXmark}
                className="text-[#898989] text-xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-start items-start flex-col gap-3 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[#898989] text-sm font-normal">備註</h2>
            <h2 className="text-[#898989] text-sm font-normal">58/500</h2>
          </div>
          <textarea className="w-full h-[200px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
        </div>
      </div>
      <div className="lg:pl-9 lg:mt-0 mt-8 flex justify-start items-start flex-col gap-6 w-full">
        <h1 className="text-white text-[28px]">資訊</h1>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">會員編號</p>
          <p className="text-white text-xs sm:text-base">01234</p>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">店家編號</p>
          <input
            type="text"
            className="focus:outline-none max-w-[180px] sm:max-w-[309px] w-full pr-3 text-[#898989] bg-transparent text-base rounded-full h-10 text-right border-[1px] border-[#898989] border-solid "
          />
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">會員名稱</p>
          <input
            type="text"
            className="focus:outline-none max-w-[180px] sm:max-w-[309px] w-full pr-3 text-[#898989] bg-transparent text-base rounded-full h-10 text-right border-[1px] border-[#898989] border-solid "
          />
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">會員暱稱</p>
          <input
            type="text"
            className="focus:outline-none max-w-[180px] sm:max-w-[309px] w-full pr-3 text-[#898989] bg-transparent text-base rounded-full h-10 text-right border-[1px] border-[#898989] border-solid "
          />
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">生日</p>
          <input
            type={"date"}
            className="focus:outline-none max-w-[180px] sm:max-w-[309px] w-full pr-3 text-[#898989]  bg-transparent text-base rounded-full h-10 text-right border-[1px] border-[#898989] border-solid "
          />
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">性別</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-3">
              <input
                type={"radio"}
                id="男"
                className="accent-main-pink"
                name="性別"
              />
              <label className="text-white text-sm" htmlFor="男">
                男
              </label>
            </div>
            <div className="flex justify-center items-center gap-3">
              <input
                type={"radio"}
                id="女"
                className="accent-main-pink"
                name="性別"
              />
              <label className="text-white text-sm" htmlFor="女">
                女
              </label>
            </div>
            <div className="flex justify-center items-center gap-3">
              <input
                type={"radio"}
                id="其他"
                className="accent-main-pink"
                name="性別"
              />
              <label className="text-white text-sm" htmlFor="其他">
                其他
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">密碼</p>
          <button className="text-white text-xs sm:text-xs rounded-full bg-main-pink border-none w-[65px] h-[35px] cursor-pointerso">
            修改密碼
          </button>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">電子郵件</p>
          <div className="flex justify-center items-center gap-3">
            <p className="text-white text-xs sm:text-base">abc123@gmail.com</p>
            <button className="text-[#3c3c3c] text-xs rounded-full bg-[#2CCF54] border-none w-[65px] h-[35px] cursor-pointerso">
              已驗證
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">行動電話</p>
          <div className="flex justify-center items-center gap-3">
            <p className="text-white text-xs sm:text-base">0911111111</p>
            <button className="text-[#3c3c3c] text-xs rounded-full bg-[#FF4B4B] border-none w-[65px] h-[35px] cursor-pointerso">
              未驗證
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">推薦人數</p>
          <p className="text-white text-xs sm:text-base">10</p>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">推薦碼</p>
          <p className="text-white text-xs sm:text-base">
            abc123 <FontAwesomeIcon icon={faCopy} />
          </p>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">推薦人</p>
          <p className="text-white text-xs sm:text-base">
            abc123
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </p>
        </div>
        <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
          <p className="text-base text-gray-text">黑名單 (2)</p>
        </div>
        <div className="flex justify-start items-start flex-col gap-2">
          <h1 className="text-[#777777] text-base font-normal">
            <FontAwesomeIcon icon={faCheckCircle} />{" "}
            預約未到預約未到預約未到預約未到
          </h1>
          <p className="text-gray-text text-xs pl-5">2022/04/21 13:00</p>
        </div>
        <div className="flex justify-start items-start flex-col gap-2">
          <h1 className="text-[#777777] text-base font-normal">
            <FontAwesomeIcon icon={faXmarkCircle} /> 我覺得這客戶態度非常不好
          </h1>
          <p className="text-gray-text text-xs pl-5">2022/04/21 13:00</p>
        </div>
        <div className="flex justify-start items-start flex-col gap-2">
          <h1 className="text-[#777777] text-base font-normal">
            <FontAwesomeIcon icon={faCheckCircle} />{" "}
            預約未到預約未到預約未到預約未到
          </h1>
          <p className="text-gray-text text-xs pl-5">2022/04/21 13:00</p>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 items-center w-full justify-start mt-10">
          <button className="text-[#898989] text-lg bg-white rounded-full h-12 w-full sm:w-[200px]">
            加入黑名單
          </button>
          <button className="text-white text-lg bg-main-pink rounded-full h-12 w-full sm:w-[200px]">
            總機聊天室
          </button>
          <button className="text-white text-lg bg-main-pink rounded-full h-12 w-full sm:w-[200px]">
            儲存修改
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDetails;
