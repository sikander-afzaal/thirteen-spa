import { useState } from "react";
//ICON LIBRARY ---------------------------
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Components
import TableRow from "../../Components/TableRow";

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
  return (
    <div className="flex w-full justify-start items-start flex-col ">
      {/* header  */}
      <div className="flex justify-start items-center gap-5">
        <h1 className="text-white text-2xl sm:text-[33px] font-semibold">
          會員管理
        </h1>
        <div className="rounded-2xl bg-[#313131] p-3 flex justify-between items-center gap-3">
          <p className="text-white text-sm">標籤</p>
          <p className="text-white rounded-full py-2 px-7 flex items-center justify-center gap-2 border-[1px] border-solid border-[#898989]">
            AAAA <FontAwesomeIcon className="" icon={faChevronDown} />
          </p>
        </div>
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
      <div className="flex items-start overflow-x-auto justify-start flex-col bg-[#313131] p-5 w-full rounded-2xl mt-8">
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
              return <TableRow {...elem} key={"member" + idx} />;
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
    </div>
  );
};

export default Member;
