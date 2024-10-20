import React from "react";
import Label from "@components/form/Label";

const InputArea = ({
  name,
  label,
  type,
  Icon,
  register,
  readOnly,
  defaultValue,
  autocomplete,
  placeholder,
  required = true,
}) => {
  return (
    <>
      <Label label={label} />
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-800 focus-within:text-gray-900 sm:text-base">
              <Icon />{" "}
            </span>
          </div>
        )}
        <input
          {...register(`${name}`, {
            required: required ? `${label} is required!` : false,
          })}
          type={type}
          name={name}
          readOnly={readOnly}
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete={autocomplete}
          className={`${
            Icon ? "py-2 pl-10" : "py-2 px-4 md:px-5"
          } w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12 ${
            readOnly ? "bg-gray-100 cursor-not-allowed text-gray-500" : ""
          }`}
        />
      </div>
    </>
  );
};

export default InputArea;
