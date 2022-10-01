import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen gap-3 flex-col">
      <img src="/logo.png" alt="" />
      <h2 className="text-white text-[33px] font-normal">總機後台</h2>
      <div className="max-w-[410px] w-[90%] flex justify-center items-start flex-col gap-4 mt-5">
        <input
          type="text"
          placeholder="輸入帳號"
          className="pl-5 bg-light-gray text-gray-text text-sm rounded-[30px] w-full h-10"
        />
        <input
          type="text"
          placeholder="輸入密碼"
          className="pl-5 bg-light-gray text-gray-text text-sm rounded-[30px] w-full h-10"
        />
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="agree"
            className="accent-gray-text w-5 h-5"
          />
          <label className="text-white text-base" htmlFor="agree">
            記住我
          </label>
        </div>
        <Link
          className="mt-10 flex items-center justify-center w-full rounded-full bg-main-pink text-white text-lg font-medium h-[50px]"
          to={"/home"}
        >
          登入
        </Link>
      </div>
    </div>
  );
};

export default Login;
