import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface TextInputProps<TFormValues> {
  label: string;                                 // Label for the input
  id: string;                                    // Unique ID for the input
  name: keyof TFormValues;                       // Field name for react-hook-form
  type?: string;                                 // Input type (text, password, etc.)
  placeholder?: string;                          // Optional placeholder
  register: UseFormRegister<TFormValues>;        // react-hook-form's register method
  errors?: FieldError | undefined;               // Validation error
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Optional onChange handler
}

const TextInput = <TFormValues extends Record<string, any>>({
  label,
  id,
  name,
  type = 'text',
  placeholder = '',
  register,
  errors,
  onChange, // Optional onChange handler
}: TextInputProps<TFormValues>) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(name)} // Register the input with react-hook-form
        placeholder={placeholder}
        onChange={onChange} // Pass the optional onChange handler
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          errors ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {errors && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
    </div>
  );
};

export default TextInput;
