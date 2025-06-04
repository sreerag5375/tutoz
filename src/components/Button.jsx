import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  href,
  target,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) => {
  // Base styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center';
  
  // Size variants
  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };
  
  // Color variants
  const variantStyles = {
    primary: 'bg-[#F0B82D] text-white hover:bg-[#E5A91C] focus:ring-[#F0B82D] shadow-md hover:shadow-lg',
    secondary: 'bg-white text-[#F0B82D] border-2 border-[#F0B82D] hover:bg-[#F0B82D] hover:text-white focus:ring-[#F0B82D]',
    outline: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300'
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // Handle external links
  const handleClick = (e) => {
    if (href && href.includes('play.google.com')) {
      // Open Play Store in new tab
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
  };
  
  // If it's a link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={buttonStyles}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // Regular button
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;