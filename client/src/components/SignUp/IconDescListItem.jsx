import React from 'react';

function IconDescListItem({ children, icon }) {
  return (
    <div className="flex items-center justify-start my-4">
      <span className="text-2xl text-sky-500">{icon}</span>
      <span className="text-lg mx-4">{children}</span>
    </div>
  );
}

export default IconDescListItem;
