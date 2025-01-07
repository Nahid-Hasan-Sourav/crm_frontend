// src/components/DynamicButton.tsx
import React from 'react';

interface DynamicButtonProps {
  text: string;               
  onClick?: () => void;         // Button click event handler
  disabled?: boolean;          // Optional disabled state
  className?: string;          // Optional custom className for additional styling
}

const Button: React.FC<DynamicButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className = '',
}) => {
  // Tailwind classes for the button
  const baseButtonClasses = `
    px-6 py-3 text-white rounded-lg transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Combine base button classes with the custom className passed in props
  const buttonClasses = `${baseButtonClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
