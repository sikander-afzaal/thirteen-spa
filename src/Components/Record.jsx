import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Record = ({ closeModal }) => {
  const tableRowStyle = "border-b-2 py-7 border-solid border-light-gray";
  return (
    <>
      <div
        onClick={() => closeModal(false)}
        className="fixed w-full h-screen left-0 top-0 bg-black opacity-60 z-20"
      ></div>
      <div className="bg-[#313131] overflow-y-auto gap-7 rounded-xl flex flex-col z-30 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-start max-h-[80vh] p-5 max-w-[600px] w-[95%]">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white text-3xl font-semibold">消費技師紀錄</h1>
          <FontAwesomeIcon
            onClick={() => closeModal(false)}
            icon={faXmark}
            className="text-2xl text-[#A8ABBD] cursor-pointer"
          />
        </div>
        <table className="table-auto border-collapse  w-[750px]  mt-5 text-white text-left">
          <thead>
            <tr>
              <th className={`${tableRowStyle} pr-5`}>店家</th>
              <th className={`${tableRowStyle}`}>消費技師</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${tableRowStyle}`}>AAA</td>
              <td className={`${tableRowStyle}`}>
                Sarah（01233）,
                Sarah（01233）,Sarah（01233）,Sarah（01233）,Sarah（01233）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Record;
