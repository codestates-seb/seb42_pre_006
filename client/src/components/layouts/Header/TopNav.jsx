import React from 'react';
import Button from '../../UI/Button';

function TopNavItem({ children }) {
  return (
    <Button
      type="button"
      className="text-sm hover:bg-gray-200 rounded-full px-3 py-2 leading-none"
    >
      {children}
    </Button>
  );
}

function TopNav({ isLogin }) {
  return (
    <nav>
      <div className="flex items-center">
        {!isLogin && <TopNavItem>About</TopNavItem>}
        <TopNavItem>Products</TopNavItem>
        {!isLogin && <TopNavItem>For Teams</TopNavItem>}
      </div>
    </nav>
  );
}

export default TopNav;
