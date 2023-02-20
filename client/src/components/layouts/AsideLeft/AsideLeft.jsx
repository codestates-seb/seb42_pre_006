import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import AsideNavItem from './AsideNavItem';

function Aside() {
  return (
    <aside className="sticky top-16 pt-4 text-left">
      <ul>
        <li>
          <AsideNavItem url="/">Home</AsideNavItem>
        </li>
        <li>
          <AsideNavItem>Public</AsideNavItem>
          <ul className="ml-4">
            <li>
              <AsideNavItem url="/questions">
                <FaGlobeAmericas className="mr-2" />
                <span>Questions</span>
              </AsideNavItem>
            </li>
            <li>
              <AsideNavItem url="/tags">Tags</AsideNavItem>
            </li>
            <li>
              <AsideNavItem url="/users">Users</AsideNavItem>
            </li>
          </ul>
        </li>
        <li>
          <AsideNavItem url="/guide">Guide</AsideNavItem>
        </li>
        <li>
          <AsideNavItem url="/detail">Detail</AsideNavItem>
        </li>
        <li>
          <AsideNavItem url="/ask">Ask</AsideNavItem>
        </li>
        <li>
          <AsideNavItem url="/edit">Edit</AsideNavItem>
        </li>


      </ul>
    </aside>
  );
}

export default Aside;
