// src/components/DynamicTextInput.tsx
import React from 'react';

interface DynamicTextInputProps {
  value: string;                 // Value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Change event handler
  placeholder?: string;          // Optional placeholder text
  disabled?: boolean;            // Optional disabled state
  className?: string;            // Optional custom className for additional styling
}

const TextInput: React.FC<DynamicTextInputProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = true,
  className = '',
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${disabled ? 'bg-gray-200' : ''}`}
    />
  );
};

export default TextInput;
