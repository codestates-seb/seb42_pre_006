import React from "react";

function TopNavItem({ children }) {
  return (
    <button className="text-sm hover:bg-gray-200 rounded-full px-3 py-2 leading-none">
      {children}
    </button>
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
