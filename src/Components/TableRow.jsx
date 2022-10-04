//ICON LIBRARY ----------------------------------
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableRow = ({
  openDetails,
  id,
  img,
  name,
  phone,
  gender,
  recommender,
}) => {
  const tableRowStyle = "border-b-2 py-7 border-solid border-light-gray";
  return (
    <tr>
      <td className={`${tableRowStyle}`}>
        <input type="checkbox" />
      </td>
      <td className={`${tableRowStyle}`}>{id}</td>
      <td className={`${tableRowStyle}`}>
        <div className="flex items-center gap-2">
          <img src={img} alt="" /> {name}
        </div>
      </td>
      <td className={`${tableRowStyle}`}>{phone}</td>
      <td className={`${tableRowStyle}`}>{gender}</td>
      <td className={`${tableRowStyle}`}>{recommender}</td>
      <td className={`${tableRowStyle}`}></td>
      <td className={`${tableRowStyle}`}>
        <div className="flex gap-5 items-center w-full justify-end">
          <FontAwesomeIcon
            className="rounded-full bg-main-pink text-white h-10 w-10 p-3"
            icon={faMessage}
          />
          <button
            onClick={() => {
              openDetails(true);
            }}
            className="py-3 px-5 rounded-full text-white bg-light-gray"
          >
            詳細
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
