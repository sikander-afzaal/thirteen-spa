const CtaBtn = ({ name, task }) => {
  return (
    <button
      onClick={() => setAddMember(true)}
      className="flex items-center justify-center w-full max-w-[100px] rounded-full bg-main-pink text-white text-lg font-medium h-[50px]"
    >
      {name}
    </button>
  );
};

export default CtaBtn;
