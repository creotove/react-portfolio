import React from 'react';

const CustomInput = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    name,
    label,
    required = false,
    className = '',
    rows = 3,
    borderClass = 'border-x-orange',
    isTextArea = false,
    error = false,
    errorMessage = '',
}) => {
    const inputClasses = `
    ${isTextArea ? 'md:w-3/4 w-full' : ''}
    px-3 
    py-2 
    bg-x-gray-dark 
    text-white 
    rounded-lg 
    border-2 
    focus:outline-none 
    focus:border-x-yellow
    transition-colors
    ${borderClass}
    ${className}
  `;

    const inputStyles = {
        boxShadow: "3px 3px 0px 0px rgba(0, 0, 0, 0.2)",
    };

    return (
        <div className="mb-4">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-x-gray-dark font-bold mb-1"
                >
                    {label}
                </label>
            )}
            {isTextArea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={rows}
                    className={inputClasses}
                    style={inputStyles}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={inputClasses}
                    style={inputStyles}
                />
            )}
            {
                error && (
                    <p className="w-min text-white rounded-lg p-2 bg-x-red text-sm mt-1 whitespace-nowrap">{errorMessage}</p>
                )
            }
        </div>
    );
};

export default CustomInput;