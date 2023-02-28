import React from 'react';
import { Link } from 'react-router-dom';

function SiteMapTitle({ children }) {
  return (
    <h5 className="font-semibold text-sm uppercase text-gray-300">
      {children}
    </h5>
  );
}

function SiteMapChildren({ children }) {
  return <ul className="mt-3">{children}</ul>;
}

function SiteMapItem({ to, children }) {
  return (
    <li className="my-1">
      <Link to={to} className="text-sm text-gray-400">
        {children}
      </Link>
    </li>
  );
}

function SiteMapMain({ children }) {
  return <div className="text-left ml-24 first:ml-12">{children}</div>;
}

const SiteMapNav = Object.assign(SiteMapMain, {
  Title: SiteMapTitle,
  Children: SiteMapChildren,
  Item: SiteMapItem,
});

export default SiteMapNav;
