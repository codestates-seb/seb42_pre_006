import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAllInbox } from 'react-icons/md';
import { ImTrophy } from 'react-icons/im';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { FaUserCircle } from 'react-icons/fa';
import Button from '../../UI/Button';
import { AuthContext } from '../../../context/auth-context';

function UserNavItem({ onClick, children }) {
  return (
    <Button
      type="button"
      className="text-lg flex items-center p-2 text-gray-500 hover:bg-gray-200 rounded-md"
      onClick={onClick}
      text
    >
      {children}
    </Button>
  );
}

function UserNav() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  // 로그인 전
  const isNotLoginComponent = (
    <>
      <div className="mx-1">
        <Button variant="secondary" size="sm" to="/login">
          Log in
        </Button>
      </div>
      <div className="mx-1 ">
        <Button variant="primary" size="sm" to="/signup">
          Sign up
        </Button>
      </div>
    </>
  );

  // 로그인 후
  const isLoggedInComponent = (
    <>
      <div className="mx-1 mr-4">
        <Link to="/users/1">
          <UserNavItem>
            <FaUserCircle className=" text-violet-900" />
            <span className="ml-2 leading-none font-semibold">1</span>
          </UserNavItem>
        </Link>
      </div>
      <div className="mx-1">
        <UserNavItem>
          <MdAllInbox />
        </UserNavItem>
      </div>
      <div className="mx-1">
        <UserNavItem>
          <ImTrophy />
        </UserNavItem>
      </div>
      <div className="mx-1">
        <UserNavItem>
          <BsFillQuestionCircleFill />
        </UserNavItem>
      </div>
      <div className="mx-1">
        <UserNavItem onClick={handleLogout}>
          <HiChatBubbleBottomCenterText />
        </UserNavItem>
      </div>
    </>
  );

  return (
    <nav className="flex">
      {!isLoggedIn ? isNotLoginComponent : isLoggedInComponent}
    </nav>
  );
}

export default UserNav;
