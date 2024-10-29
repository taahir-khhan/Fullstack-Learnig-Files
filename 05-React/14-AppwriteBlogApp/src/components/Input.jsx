import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    type = "text",
    placeholder = "Enter text...",
    label,
    className = "",
    ...props
  },
  ref
) {
  const uniqueId = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={uniqueId}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-ful ${className}`}
        ref={ref}
        id={uniqueId}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

export default Input;
