import classNames from 'classnames';
import React from 'react';

const SIZES = {
  sm: 'h-9',
  md: 'h-10',
  lg: 'h-12',
};

const VARIANTS = {
  default: 'btn-default',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  orange: 'btn-orange',
  danger: 'btn-danger',
};

function Button({
  variant,
  size = 'md',
  icon,
  block,
  text,
  rounded,
  children,
  className,
  onClick,
}) {
  return (
    <button
      className={classNames(
        'btn',
        SIZES[size],
        VARIANTS[variant],
        { 'btn-text': !!text },
        { 'w-full': !!block },
        { 'gap-2': !!icon },
        { 'rounded-full': !!rounded },
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
