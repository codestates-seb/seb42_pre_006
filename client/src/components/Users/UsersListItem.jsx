import React from 'react';
import { Link } from 'react-router-dom';

function UsersListItem({ user }) {
  return (
    <li className="text-sm flex justify-start items-center">
      <Link to={`/users/${user.memberId}`}>
        <img
          className="w-14 h-14 rounded mr-1"
          src={`https://picsum.photos/id/${Math.round(
            Math.random() * 200,
          )}/200/300`}
          alt={user.displayName}
        />
      </Link>
      <div className="flex flex-col m-1">
        <span className="text-blue-700 text-base font-medium">
          <Link to={`/users/${user.memberId}`}>{user.displayName}</Link>
        </span>
        <span className="">Korea</span>
        <span className="text-xs text-blue-700">JavaScript, React.js</span>
      </div>
    </li>
  );
}

export default UsersListItem;
