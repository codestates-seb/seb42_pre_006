import classNames from 'classnames';
import React from 'react';
import { MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

const VARIANTS = {
  default: 'badge-default',
  tags: 'badge-tags',
  light: 'badge-light',
  dark: 'badge-dark',
  answered: 'badge-answered',
  'answered-check': 'badge-answered-check',
  votes: 'badge-votes',
  bounty: 'badge-bounty',
};

function Badge({ variant, url, children }) {
  const iconCheck = variant === 'answered-check' && <MdCheck />;

  if (!url)
    return (
      <span className={classNames('badge', VARIANTS[variant])}>
        {iconCheck}
        {children}
      </span>
    );

  return (
    <Link
      to={url}
      className={classNames('badge', VARIANTS[variant], 'badge-hover')}
    >
      {iconCheck}
      <span>{children}</span>
    </Link>
  );
}

export default Badge;
