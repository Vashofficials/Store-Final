import React from "react";
import Label from "@components/form/Label";

const SelectOption = ({ name, label, options, onChange, value, register }) => {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          // {...register(`${name}`, {
          //   required: `${label} is required!`,
          // })}
          className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={option + index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectOption;
