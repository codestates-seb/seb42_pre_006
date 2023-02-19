import React from 'react';

function SocialNavItem({ children }) {
  return (
    <a
      href="/"
      target="_blank"
      className="inline-block mx-2 first:ml-0 text-gray-400 text-sm leading-none"
    >
      {children}
    </a>
  );
}

function SocialNav() {
  return (
    <div className="flex">
      <SocialNavItem>Blog</SocialNavItem>
      <SocialNavItem>Facebook</SocialNavItem>
      <SocialNavItem>Twitter</SocialNavItem>
      <SocialNavItem>LinkedIn</SocialNavItem>
      <SocialNavItem>Instagram</SocialNavItem>
    </div>
  );
}

export default SocialNav;
