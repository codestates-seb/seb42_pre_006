import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

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
  type,
  variant,
  size = 'md',
  icon,
  block,
  text,
  rounded,
  children,
  className,
  to,
  onClick,
}) {
  const classNameValues = classNames(
    'btn',
    SIZES[size],
    VARIANTS[variant],
    { 'btn-text': !!text },
    { 'w-full': !!block },
    { 'gap-2': !!icon },
    { 'rounded-full': !!rounded },
    className,
  );
  const LinkButton = (
    <Link to={to} className={classNameValues}>
      {icon}
      {children}
    </Link>
  );

  const EventButton = (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={classNameValues}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
  return <>{to ? LinkButton : EventButton}</>;
}

export default Button;
