import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddMember = ({ closeModal }) => {
  return (
    <>
      <div
        onClick={() => closeModal(false)}
        className="fixed w-full h-screen left-0 top-0 bg-black opacity-60 z-20"
      ></div>
      <div className="bg-[#313131] overflow-y-auto gap-7 rounded-xl flex flex-col z-30 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-start max-h-[80vh] p-5 max-w-[600px] w-[95%]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white text-3xl font-semibold">新增會員</h1>
          <FontAwesomeIcon
            onClick={() => closeModal(false)}
            icon={faXmark}
            className="text-2xl text-[#A8ABBD] cursor-pointer"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">姓名</p>
          <input
            type="text"
            placeholder="輸入內容"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">電話</p>
          <input
            type="text"
            placeholder="輸入內容"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">密碼</p>
          <input
            type="text"
            placeholder="輸入內容"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">推薦碼</p>
          <input
            type="text"
            placeholder="輸入內容"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">地區</p>
          <select
            type="text"
            placeholder="請選擇"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text px-4 rounded-full w-full"
          >
            <option value="請選擇">請選擇</option>
          </select>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">Mail（非必填）</p>
          <input
            type="text"
            placeholder="輸入內容"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-6 items-center w-full justify-start">
          <button
            onClick={() => closeModal(false)}
            className="text-[#898989] text-lg bg-white rounded-full h-12 w-full "
          >
            取消
          </button>
          <button
            onClick={() => closeModal(false)}
            className="text-white text-lg bg-main-pink rounded-full h-12 w-full "
          >
            保存
          </button>
        </div>
      </div>
    </>
  );
};

export default AddMember;
