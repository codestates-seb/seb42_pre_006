import React from 'react';
import classNames from 'classnames';
import { BsPencilFill, BsStackOverflow } from 'react-icons/bs';
import { MdChatBubbleOutline } from 'react-icons/md';

const COLOR_TYPES = {
  default: {
    header: 'bg-gray-50 text-gray-500',
    content: 'bg-white',
  },
  yellow: {
    header: 'bg-yellow-100 text-gray-black text-semibold',
    content: 'bg-yellow-50',
  },
};

const ICON_TYPES = {
  blogs: <BsPencilFill className="text-gray-800" />,
  overflow: <BsStackOverflow className="text-gray-400" />,
  meta: <MdChatBubbleOutline className="text-blue-600" />,
};

function SidebarWidgetBox({ title, children, color = 'default' }) {
  return (
    <>
      <h3
        className={classNames(
          'border-b px-4 py-2 text-sm font-semibold',
          COLOR_TYPES[color].header,
        )}
      >
        {title}
      </h3>
      <div className={classNames('px-4 py-4', COLOR_TYPES[color].content)}>
        {children}
      </div>
    </>
  );
}

function SidebarWidgetIconListItem({ type = 'overflow', url, children }) {
  return (
    <div className="mt-2 first:mt-0">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex align-top justify-start"
      >
        <span className="mr-2 pt-2 text-xs">{ICON_TYPES[type]}</span>
        <span className="text-sm">{children}</span>
      </a>
    </div>
  );
}

function WidgetMain({ children }) {
  return (
    <div className="border rounded-md shadow-lg overflow-hidden text-left mt-6 first:mt-0">
      {children}
    </div>
  );
}

const SidebarWidget = Object.assign(WidgetMain, {
  Box: SidebarWidgetBox,
  ListItem: SidebarWidgetIconListItem,
});

export default SidebarWidget;
