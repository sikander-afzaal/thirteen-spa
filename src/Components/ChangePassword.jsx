import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChangePassword = ({ closeModal }) => {
  return (
    <>
      <div
        onClick={() => closeModal(false)}
        className="fixed w-full h-screen left-0 top-0 bg-black opacity-60 z-20"
      ></div>
      <div className="bg-[#313131] overflow-y-auto gap-7 rounded-xl flex flex-col z-30 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-start max-h-[80vh] p-5 max-w-[600px] w-[95%]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white text-3xl font-semibold">修改密碼</h1>
          <FontAwesomeIcon
            onClick={() => closeModal(false)}
            icon={faXmark}
            className="text-2xl text-[#A8ABBD] cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-white text-sm">認證方式</p>
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="pwd"
                id="信箱認證"
                className="accent-main-pink "
              />
              <label className="text-white text-base" htmlFor="信箱認證">
                信箱認證
              </label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="pwd"
                id="簡訊認證"
                className="accent-main-pink "
              />
              <label className="text-white text-base" htmlFor="簡訊認證">
                簡訊認證
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-2 w-full">
          <p className="text-white text-sm">行動電話</p>
          <div className="flex justify-start items-center gap-2 w-full">
            <input
              type="text"
              placeholder="0900000000"
              className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
            />
            <button
              onClick={() => closeModal(false)}
              className="text-white text-lg max-w-[138px] bg-main-pink rounded-full h-12 w-full "
            >
              發送驗證碼
            </button>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-2 w-full">
          <p className="text-white text-sm">輸入驗證碼</p>
          <div className="flex justify-start items-center gap-2 w-full">
            <div className="w-full relative">
              <input
                type="text"
                className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full "
              />
              <p className="absolute text-xs bg-[#AEAEAE] rounded-full top-1/2 right-4 -translate-y-1/2 h-[22px] w-[50px] text-white grid place-items-center">
                未驗證
              </p>
            </div>
            <button
              onClick={() => closeModal(false)}
              className="text-white text-lg max-w-[138px] bg-main-pink rounded-full h-12 w-full "
            >
              確認
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2 border-t-[1px] border-[#484848] border-solid pt-5">
          <p className="text-white text-sm">新密碼</p>
          <input
            type="text"
            placeholder="請輸入"
            className="text-gray-text bg-transparent h-10 text-sm border-[1px] border-solid border-gray-text pl-4 rounded-full w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-2">
          <p className="text-white text-sm">再次輸入新密碼</p>
          <input
            type="text"
            placeholder="請輸入"
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

export default ChangePassword;
