import classNames from 'classnames';
import React from 'react';
import FormGroupProvider from '../../../context/form-group-fontex';

function FormGroup({
  id,
  name,
  label,
  labelDetail,
  className,
  errors,
  register,
  setValue,
  validation,
  children,
}) {
  return (
    <div className={classNames('my-4', className)}>
      <label
        htmlFor={id}
        className="block text-left font-semibold text-sm mb-2"
      >
        {label}
        {labelDetail && (
          <span className="block text-xs text-gray-400 font-normal">
            {labelDetail}
          </span>
        )}
      </label>
      <FormGroupProvider
        id={id}
        name={name}
        errors={errors}
        register={register}
        validation={validation}
        setValue={setValue}
      >
        {children}
      </FormGroupProvider>
      {errors && errors[name]?.type && (
        <p className="mt-1 text-sm text-danger text-left">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default FormGroup;
