import { useEffect, useState } from "react";
//ICON LIBRARY ---------------------------
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//React Router Dom ------------------------------
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";
//Components
import TableRow from "../../../Components/TableRow";
import ConsumptionRow from "../../../Components/ConsumptionRow";
import ToggleBtn from "../../../Components/ToggleBtn";

//navlink component --------------------------------
// const NavlinkComp = (path, name) => {
//
//   return (

//   );
// };

const TechnicianManage = () => {
  const NAVLINK__STYLES =
    "cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm";
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
  const CONSUMPTION_DATA = [
    {
      id: "00001",
      coupen: "有",
      amount: "5000",
      appointment: "2022/3/12 12:00-2022/3/12 12:00",
      order: "2022/3/12 12:00",
      state: "已完成",
    },
    {
      id: "00001",
      coupen: "有",
      amount: "5000",
      appointment: "2022/3/12 12:00-2022/3/12 12:00",
      order: "2022/3/12 12:00",
      state: "已完成",
    },
    {
      id: "00001",
      coupen: "有",
      amount: "5000",
      appointment: "2022/3/12 12:00-2022/3/12 12:00",
      order: "2022/3/12 12:00",
      state: "已完成",
    },
    {
      id: "00001",
      coupen: "有",
      amount: "5000",
      appointment: "2022/3/12 12:00-2022/3/12 12:00",
      order: "2022/3/12 12:00",
      state: "已完成",
    },
  ];
  const tableRowStyle = "border-b-2 py-7 border-solid border-light-gray";
  const [tab, setTab] = useState("所有會員");
  const [memberDetails, setMemberDetails] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (memberDetails) {
      setTab("基本資訊");
    } else {
      setTab("所有會員");
    }
  }, [memberDetails]);

  return (
    <div className="flex w-full justify-start items-start flex-col ">
      {/* header  */}
      <div className="flex justify-start items-center gap-5 w-full">
        <h1 className="text-white text-2xl sm:text-[33px] font-semibold w-full">
          {location.pathname !== "/home/technician-manage" ? (
            <div className="flex justify-between items-start sm:items-center w-full sm:flex-row flex-col gap-5">
              <Link to={"/home/technician-manage"}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-white text-2xl mr-5 cursor-pointer"
                  onClick={() => {
                    setMemberDetails(false);
                  }}
                />
                技師資料 - Anna（81076）
              </Link>
              <div className="h-12 self-end sm:self-auto px-4 flex justify-center  items-center gap-3 rounded-2xl bg-[#313131]">
                <p className="text-white text-sm">已上架</p>
                <ToggleBtn />
              </div>
            </div>
          ) : (
            "技師管理"
          )}
        </h1>
      </div>
      {/* tabs + button  */}
      <div className="mt-[35px] flex justify-between items-start w-full overflow-x-auto">
        {location.pathname !== "/home/technician-manage" ? (
          //when viewing member details this page is nav is shown else the other one

          <div className="flex justify-start items-center gap-1 ">
            <NavLink
              to={`/home/technician-manage/details`}
              className={({ isActive }) =>
                ` ${NAVLINK__STYLES}  ${
                  isActive
                    ? "text-white border-main-pink"
                    : "border-[#898989] text-[#898989]"
                }`
              }
            >
              基本資訊
            </NavLink>
            <NavLink
              to={`/home/technician-manage/info`}
              className={({ isActive }) =>
                ` ${NAVLINK__STYLES}  ${
                  isActive
                    ? "text-white border-main-pink"
                    : "border-[#898989] text-[#898989]"
                }`
              }
            >
              技師資訊
            </NavLink>

            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "技師設定"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              技師設定
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "服務項目"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              服務項目
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "評價"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              評價
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "推薦人"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              推薦人
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "積分紀錄"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              積分紀錄
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "合作方案"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              合作方案
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "班表"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              班表
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "訂單紀錄"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              訂單紀錄
            </p>
            <p
              onClick={(e) => {
                setTab(e.target.innerText);
              }}
              className={`cursor-pointer text-center w-[60px] sm:w-[90px] pb-5 border-b-2  border-solid text-xs sm:text-sm  ${
                tab === "操作紀錄"
                  ? "text-white border-main-pink"
                  : "border-[#898989] text-[#898989]"
              }`}
            >
              操作紀錄
            </p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      {/* table start  */}
      {location.pathname === "/home/technician-manage" ? (
        tab === "所有會員" ? (
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
        ) : (
          <div className="flex items-start scollBar overflow-x-auto justify-start flex-col bg-[#313131] p-5 w-full rounded-2xl mt-8">
            {/* search bar  */}
            <div className="w-full sm:flex-row flex-col flex items-center justify-start gap-3">
              <div className="h-[40px] px-5 gap-3 w-full flex justify-start items-center bg-[#464646] rounded-full">
                <FontAwesomeIcon className="text-[#aeaeae]" icon={faSearch} />
                <input
                  type="text"
                  placeholder="搜尋用戶"
                  className="w-full text-[#aeaeae] text-base h-full border-none bg-transparent focus:outline-none"
                />
              </div>
              <button className="text-white sm:max-w-[142px] text-lg bg-main-pink rounded-full h-10 w-full ">
                消費技師
              </button>
            </div>

            {/* table  */}
            <table className="table-auto  border-collapse w-[1000px] lg:w-full mt-10 text-white text-left">
              <thead>
                <tr>
                  <th className={`${tableRowStyle}`}>訂單編號</th>
                  <th className={`${tableRowStyle}`}>優惠券有無</th>
                  <th className={`${tableRowStyle}`}>金額</th>
                  <th className={`${tableRowStyle}`}>預約時間</th>
                  <th className={`${tableRowStyle}`}>訂單成立</th>
                  <th className={`${tableRowStyle}`}>狀態</th>
                  <th className={`${tableRowStyle}`}></th>
                </tr>
              </thead>
              <tbody>
                {CONSUMPTION_DATA.map((elem, idx) => {
                  return (
                    <ConsumptionRow
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
        )
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default TechnicianManage;
