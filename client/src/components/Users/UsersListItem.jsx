import React from 'react';
import { Link } from 'react-router-dom';

function UsersListItem({ user }) {
  return (
    <li className="text-sm flex justify-start items-top">
      <Link to={`/users/${user.memberId}`}>
        <img
          className="w-14 h-14 rounded mr-1"
          src="https://source.unsplash.com/random/200x200"
          alt={user.displayName}
        />
      </Link>
      <div className="flex flex-col mx-2">
        <span className="text-blue-700 text-base font-medium">
          <Link to={`/users/${user.memberId}`}>{user.displayName}</Link>
        </span>
        {user.location && (
          <span className="text-xs text-gray-800">{user.location}</span>
        )}
        {user.location && (
          <span className="text-xs text-link">{user.memberTitle}</span>
        )}
      </div>
    </li>
  );
}

export default UsersListItem;
