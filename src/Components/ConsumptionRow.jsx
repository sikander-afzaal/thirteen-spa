import { Link } from "react-router-dom";

const ConsumptionRow = ({ id, coupen, amount, order, appointment, state }) => {
  const tableRowStyle = "border-b-2 py-7 border-solid border-light-gray";
  return (
    <tr>
      <td className={`${tableRowStyle}`}>{id}</td>
      <td className={`${tableRowStyle}`}>{coupen}</td>
      <td className={`${tableRowStyle}`}>{amount}</td>
      <td className={`${tableRowStyle}`}>{appointment}</td>
      <td className={`${tableRowStyle}`}>{order}</td>
      <td className={`${tableRowStyle}`}>{state}</td>
      <td className={`${tableRowStyle}`}>
        <Link
          to={"/home/technician-manage/details"}
          className="py-3 px-5 rounded-full text-white bg-light-gray"
        >
          詳細
        </Link>
      </td>
    </tr>
  );
};

export default ConsumptionRow;
