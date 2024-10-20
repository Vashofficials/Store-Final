import useUtilsFunction from "@hooks/useUtilsFunction";
import React from "react";

const OrderTable = ({ data, currency }) => {
  const { getNumberTwo } = useUtilsFunction();

  return (
    <tbody className="bg-white divide-y divide-gray-100 text-serif text-sm">
      {data?.cart?.map((item, i) => (
        <tr key={i}>
          <th className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
            {i + 1}{" "}
          </th>
          <td className="px-6 py-1 whitespace-nowrap font-normal text-gray-500">
            {item.title}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center">
            {item.quantity}{" "}
          </td>
          <td className="px-6 py-1 whitespace-nowrap font-bold text-center font-DejaVu">
            {currency}
            {getNumberTwo(item.price)}
          </td>

          <td className="px-6 py-1 whitespace-nowrap text-right font-bold font-DejaVu k-grid text-red-500">
            {currency}
            {getNumberTwo(item.itemTotal)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderTable;
