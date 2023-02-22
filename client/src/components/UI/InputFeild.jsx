import classNames from 'classnames';
import React from 'react';
import { MdError } from 'react-icons/md';

function InputFeild({
  id,
  name,
  label,
  labelDetail,
  type = 'text',
  value,
  placeholder,
  errors,
  validation,
  register,
  disabled,
  className,
  onChange,
}) {
  const setRegister = register && register(name, validation);

  return (
    <div className={classNames('my-4', className)}>
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
          'flex items-center border border-gray-300 rounded-sm mt-2',
          {
            'border-2 !border-danger': errors && errors[name]?.type,
          },
          {
            'bg-gray-100': disabled,
          },
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
          {...setRegister}
          className={classNames('w-full h-8 p-2', {
            'outline-none': errors,
          })}
        />
        {errors && errors[name]?.type && (
          <MdError className="text-danger mx-4 text-2xl" />
        )}
      </div>
      {errors && errors[name]?.type && (
        <p className="mt-1 text-sm text-danger text-left">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default InputFeild;
