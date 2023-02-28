import classNames from 'classnames';
import React, { useContext } from 'react';
import { MdError } from 'react-icons/md';
import { FormGroumContext } from '../../../context/form-group-fontex';

function InputFeild({
  type = 'text',
  placeholder,
  disabled,
  onChange,
  className,
}) {
  const { id, name, errors, validation, register } =
    useContext(FormGroumContext);

  const setRegister = register && register(name, validation);

  return (
    <div
      className={classNames(
        'flex items-center border border-gray-300 rounded-sm mt-2',
        {
          'border-2 !border-danger': errors && errors[name]?.type,
        },
        {
          'bg-gray-100': disabled,
        },
        className,
      )}
    >
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...setRegister}
        className={classNames('w-full h-8 p-2', {
          'outline-none': errors,
          className,
        })}
      />
      {errors && errors[name]?.type && (
        <MdError className="text-danger mx-4 text-2xl" />
      )}
    </div>
  );
}

export default InputFeild;
