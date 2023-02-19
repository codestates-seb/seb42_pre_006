import classNames from 'classnames';
import React from 'react';

function Card({ children, className }) {
  return (
    <div
      className={classNames(
        'bg-white rounded-md shadow-gray-200 shadow-xl p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
