import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import AsideNavItem from './AsideNavItem';

function Aside() {
  return (
    <aside className="sticky top-16 pt-4 text-left">
      <ul>
        <li>
          <AsideNavItem to="/">Home</AsideNavItem>
        </li>
        <li>
          <AsideNavItem>Public</AsideNavItem>
          <ul className="ml-4">
            <li>
              <AsideNavItem to="/questions">
                <FaGlobeAmericas className="mr-2" />
                <span>Questions</span>
              </AsideNavItem>
            </li>
            <li>
              <AsideNavItem to="/tags">Tags</AsideNavItem>
            </li>
            <li>
              <AsideNavItem to="/users">Users</AsideNavItem>
            </li>
          </ul>
        </li>
        <li>
          <AsideNavItem to="/guide">Guide</AsideNavItem>
        </li>
        <li>
          <AsideNavItem to="/detail">Detail</AsideNavItem>
        </li>
        <li>
          <AsideNavItem to="/ask">Ask</AsideNavItem>
        </li>
        <li>
          <AsideNavItem to="/edit">Edit</AsideNavItem>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
