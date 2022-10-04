import { useState } from "react";
//ICON LIBRARY ---------------------------
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faPlusCircle,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Components
import TableRow from "../../Components/TableRow";
import {
  faCheckCircle,
  faCopy,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

const Member = () => {
  const MEMBER_DATA = [
    {
      id: "00001",
      name: "David",
      img: "/test.png",
      phone: "0900000000",
      recommender: "男",
      gender: "Mike(12313)",
    },
    {
      id: "00001",
      name: "David",
      img: "/test.png",
      phone: "0900000000",
      recommender: "男",
      gender: "Mike(12313)",
    },
    {
      id: "00001",
      name: "David",
      img: "/test.png",
      phone: "0900000000",
      recommender: "男",
      gender: "Mike(12313)",
    },
    {
      id: "00001",
      name: "David",
      img: "/test.png",
      phone: "0900000000",
      recommender: "男",
      gender: "Mike(12313)",
    },
  ];
  const tableRowStyle = "border-b-2 py-7 border-solid border-light-gray";
  const [tab, setTab] = useState("所有會員");
  const [memberDetails, setMemberDetails] = useState(false);
  return (
    <div className="flex w-full justify-start items-start flex-col ">
      {/* header  */}
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-white text-2xl sm:text-[33px] font-semibold">
          {memberDetails ? (
            <p>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white text-2xl mr-5"
                onClick={() => setMemberDetails(false)}
              />
              會員資料 - 王（81076）
            </p>
          ) : (
            "會員管理"
          )}
        </h1>
        {!memberDetails && (
          <div className="rounded-2xl bg-[#313131] p-3 flex justify-between items-center gap-3">
            <p className="text-white text-sm">標籤</p>
            <p className="text-white rounded-full py-2 px-7 flex items-center justify-center gap-2 border-[1px] border-solid border-[#898989]">
              AAAA <FontAwesomeIcon className="" icon={faChevronDown} />
            </p>
          </div>
        )}
      </div>
      {/* tabs + button  */}
      <div className="mt-[35px] flex justify-between items-start w-full">
        <div className="flex justify-start items-center">
          <p
            onClick={(e) => {
              setTab(e.target.innerText);
            }}
            className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
              tab === "所有會員"
                ? "text-white border-main-pink"
                : "border-[#898989] text-[#898989]"
            }`}
          >
            所有會員
          </p>
          <p
            onClick={(e) => {
              setTab(e.target.innerText);
            }}
            className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
              tab === "黑名單"
                ? "text-white border-main-pink"
                : "border-[#898989] text-[#898989]"
            }`}
          >
            黑名單
          </p>
        </div>
        <button className="flex items-center justify-center w-full max-w-[120px] rounded-full bg-main-pink text-white text-lg font-medium h-[50px]">
          新增會員
        </button>
      </div>
      {/* table start  */}
      {memberDetails ? (
        <div className="grid gap-6 lg:gap-0 grid-cols-1 lg:grid-cols-2 flex-col bg-[#313131] py-5 px-5 sm:px-14 w-full rounded-2xl mt-8">
          <div className="flex w-full justify-start border-none lg:border-r-[1px] lg:pr-9 lg:border-solid border-light-gray items-center lg:items-start flex-col">
            <h2 className="mb-4 text-white text-[28px] font-normal">頭像</h2>
            <img src="/test-user.png" alt="" />
            <h2 className="text-white mt-4 text-[28px] font-normal">狀態</h2>
            <div className="py-3 mt-5 border-b-[1px] border-light-gray flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="禁止預約"
                className="focus:outline-none w-full  text-[#8a9099] bg-transparent text-base font-normal border-none"
              />
              <div className="flex items-center justify-center">
                <label
                  for="toggleB"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input type="checkbox" id="toggleB" className="sr-only" />

                    <div className="block bg-[#78788029] w-14 h-8 rounded-full"></div>

                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 mt-8 w-full">
              <label className="text-base text-[#898989] font-normal">
                標籤
              </label>
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
            <h1 className="text-white text-[28px]">詳細</h1>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">會員編號</p>
              <p className="text-white text-xs sm:text-base">81076</p>
            </div>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">會員名稱</p>
              <p className="text-white text-xs sm:text-base">王</p>
            </div>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">會員暱稱</p>
              <p className="text-white text-xs sm:text-base">王</p>
            </div>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">性別</p>
              <p className="text-white text-xs sm:text-base">男</p>
            </div>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">生日</p>
              <p className="text-white text-xs sm:text-base">1980/1/2</p>
            </div>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">修改密碼</p>
              <button className="text-white text-xs sm:text-xs rounded-full bg-main-pink border-none w-[65px] h-[35px] cursor-pointerso">
                修改密碼
              </button>
            </div>
            <div className="flex justify-between items-center w-full  border-b-[1px] border-light-gray pb-3">
              <p className="text-base text-gray-text">電子郵件</p>
              <div className="flex justify-center items-center gap-3">
                <p className="text-white text-xs sm:text-base">
                  abc123@gmail.com
                </p>
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
              <p className="text-base text-gray-text">點數</p>
              <p className="text-white text-xs sm:text-base">5000</p>
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
                <FontAwesomeIcon icon={faXmarkCircle} />{" "}
                我覺得這客戶態度非常不好
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
                寄送客服訊息
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start scollBar overflow-x-auto justify-start flex-col bg-[#313131] p-5 w-full rounded-2xl mt-8">
          {/* search bar  */}
          <div className="h-[40px] px-5 gap-3 w-full max-w-[854px] flex justify-start items-center bg-[#464646] rounded-full">
            <FontAwesomeIcon className="text-[#aeaeae]" icon={faSearch} />
            <input
              type="text"
              placeholder="搜尋用戶"
              className="w-full text-[#aeaeae] text-base h-full border-none bg-transparent focus:outline-none"
            />
          </div>
          {/* table  */}
          <table className="table-auto  border-collapse w-[1000px] lg:w-full mt-10 text-white text-left">
            <thead>
              <tr>
                <th className={`${tableRowStyle}`}>
                  <input type="checkbox" disabled />
                </th>
                <th className={`${tableRowStyle}`}>會員編號</th>
                <th className={`${tableRowStyle}`}>用戶名</th>
                <th className={`${tableRowStyle}`}>行動電話</th>
                <th className={`${tableRowStyle}`}>性別</th>
                <th className={`${tableRowStyle}`}>推薦人</th>
                <th className={`${tableRowStyle}`}></th>
                <th className={`${tableRowStyle}`}></th>
              </tr>
            </thead>
            <tbody>
              {MEMBER_DATA.map((elem, idx) => {
                return (
                  <TableRow
                    openDetails={setMemberDetails}
                    {...elem}
                    key={"member" + idx}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="flex gap-3 mt-20 justify-start items-center self-end">
            <p className="text-[#a8abbd] text-sm">目前頁面：</p>
            <p className="sm:hidden text-white block">1</p>
            <select className="sm:block hidden cursor-pointer bg-transparent border-none text-white focus:outline-none">
              <option className="bg-light-gray" value="1">
                1
              </option>
              <option className="bg-light-gray" value="1">
                2
              </option>
              <option className="bg-light-gray" value="1">
                3
              </option>
              <option className="bg-light-gray" value="1">
                4
              </option>
            </select>
            <p className="sm:block hidden text-[#a8abbd] text-sm">
              總計30000筆資料，共200頁
            </p>
            <FontAwesomeIcon
              className="text-[#a8abbd]  text-sm"
              icon={faChevronLeft}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[#a8abbd] text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Member;
