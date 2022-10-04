import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlackList = ({ closeModal }) => {
  return (
    <>
      <div
        onClick={() => closeModal(false)}
        className="fixed w-full h-screen left-0 top-0 bg-black opacity-60 z-20"
      ></div>
      <div className="bg-[#313131] overflow-y-auto gap-7 rounded-xl flex flex-col z-30 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-start max-h-[80vh] p-5 max-w-[600px] w-[95%]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white text-3xl font-semibold">加入黑名單</h1>
          <FontAwesomeIcon
            onClick={() => closeModal(false)}
            icon={faXmark}
            className="text-2xl text-[#A8ABBD] cursor-pointer"
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-3 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[#898989] text-sm font-normal">黑名單原因</h2>
            <h2 className="text-[#898989] text-sm font-normal">50/500</h2>
          </div>
          <textarea className="w-full h-[200px] border-solid border-[1px] rounded-2xl text-white border-[#898989] p-4 text-base resize-none bg-transparent"></textarea>
        </div>
        <div className="flex sm:flex-row flex-col gap-6 items-center w-full justify-end">
          <button
            onClick={() => closeModal(false)}
            className="sm:max-w-[180px] text-[#898989] text-lg bg-white rounded-full h-12 w-full "
          >
            取消
          </button>
          <button
            onClick={() => closeModal(false)}
            className="sm:max-w-[180px] text-white text-lg bg-main-pink rounded-full h-12 w-full "
          >
            加入黑名單
          </button>
        </div>
      </div>
    </>
  );
};

export default BlackList;
