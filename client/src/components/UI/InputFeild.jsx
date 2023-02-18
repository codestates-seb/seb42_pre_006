import classNames from "classnames";
import React from "react";
import { MdError } from "react-icons/md";

function InputFeild({
  id,
  name,
  label,
  labelDetail,
  type,
  value,
  placeholder,
  isValidError,
  disabled,
  className,
  onChange,
}) {
  return (
    <div className={classNames("my-4", className)}>
      <label htmlFor={id} className="block text-left font-semibold text-sm">
        {label}
        {labelDetail && (
          <span className="block text-xs text-gray-400 font-normal">
            {labelDetail}
          </span>
        )}
      </label>
      <div
        className={classNames(
          "flex items-center border border-gray-300 rounded-sm mt-2",
          {
            "border-2 !border-danger": isValidError,
          },
          {
            "bg-gray-100": disabled,
          }
        )}
      >
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={classNames("w-full h-8 p-2", {
            "outline-none": isValidError,
          })}
        />
        {isValidError && <MdError className="text-danger mx-4 text-2xl" />}
      </div>
      {isValidError && (
        <p className="mt-1 text-sm text-danger">Error Message</p>
      )}
    </div>
  );
}

export default InputFeild;
