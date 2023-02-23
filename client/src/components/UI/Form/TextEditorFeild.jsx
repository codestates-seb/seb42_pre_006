import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { FormGroumContext } from '../../../context/form-group-fontex';

function TextEditorFeild({
  value,
  onChange,
  disabled,
  placeholder,
  className,
}) {
  const { id, name, errors, register, validation, setValue } =
    useContext(FormGroumContext);

  const handleChangeTextEditor = contents => {
    if (contents === '<p><br></p>') {
      onChange('');
    } else {
      onChange(contents);
    }
  };

  useEffect(() => {
    register(name, validation);
  }, [register]);

  useEffect(() => {
    setValue(name, value);
  }, [value]);

  return (
    <div
      className={classNames(
        'border border-gray-300 rounded-sm mt-2',
        {
          'border-2 !border-danger': errors && errors[name]?.type,
        },
        {
          'bg-gray-100': disabled,
        },
        className,
      )}
    >
      <ReactQuill
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        onChange={handleChangeTextEditor}
        className="text-left"
      />
    </div>
  );
}

export default TextEditorFeild;
