import { useId } from "react";

const ToggleBtn = () => {
  const toggleBtn = useId();
  return (
    <div className="flex items-center justify-center">
      <label htmlFor={toggleBtn} className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id={toggleBtn} className="sr-only" />
          <div className="block bg-[#78788029] w-14 h-8 rounded-full bg-toggle transition"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleBtn;
