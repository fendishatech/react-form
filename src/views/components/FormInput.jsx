import React from "react";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const isInvalid =
    inputProps.required && inputProps.pattern && !inputProps.value;
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="focus:outline-none px-[16px] py-2 bg-slate-400 placeholder-gray-500"
        {...inputProps}
        onChange={onChange}
      />
      {isInvalid && errorMessage && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormInput;
