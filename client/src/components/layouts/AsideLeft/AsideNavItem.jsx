import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

function AsideNavItem({ url, className, children }) {
  // ASIDE 네비 아이템 기본 스타일
  const defaltClass = 'flex items-center px-4 py-2 text-sm text-gray-500';
  // ASIDE 네비 아이템 active 스타일
  const activeClass = ({ isActive }) =>
    classNames(
      defaltClass,
      isActive
        ? 'bg-gray-100 border-r-2 border-r-orange-600 text-gray-800 font-semibold'
        : '',
      className,
    );

  // to 값이 존재 하지 않는 경우
  if (!url) return <h3 className={defaltClass}>{children}</h3>;

  // to 값이 존재 하는 경우
  return (
    <NavLink to={url} className={activeClass}>
      {children}
    </NavLink>
  );
}

export default AsideNavItem;
