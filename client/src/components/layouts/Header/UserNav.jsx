import React from "react";
import { MdAllInbox } from "react-icons/md";
import { ImTrophy } from "react-icons/im";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";

function UserNavItem({ onClick, children }) {
  return (
    <button
      className="text-lg flex items-center p-2 text-gray-500 hover:bg-gray-200 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function UserNav({ isLogin, onLogout }) {
  const navigate = useNavigate();

  // 로그인 전
  const isNotLoginComponent = (
    <>
      <div className="mx-1">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate("/login")}
        >
          Log in
        </Button>
      </div>
      <div className="mx-1 ">
        <Button variant="primary" size="sm" onClick={() => navigate("/signup")}>
          Sign up
        </Button>
      </div>
    </>
  );

  // 로그인 후
  const isLoggedInComponent = (
    <>
      <div className="mx-1 mr-4">
        <UserNavItem>
          <FaUserCircle className=" text-violet-900" />
          <span className="ml-2 leading-none font-semibold">1</span>
        </UserNavItem>
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
        <UserNavItem onClick={onLogout}>
          <HiChatBubbleBottomCenterText />
        </UserNavItem>
      </div>
    </>
  );

  return (
    <nav className="flex">
      {!isLogin ? isNotLoginComponent : isLoggedInComponent}
    </nav>
  );
}

export default UserNav;
