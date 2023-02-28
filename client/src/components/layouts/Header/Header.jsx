import React, { useState } from 'react';
import LogoText from '../../UI/LogoText';
import SearchInput from './SearchInput';
import TopNav from './TopNav';
import UserNav from './UserNav';

function Header() {
  // 화면 전환 테스트 용 useState (삭제 예정)
  const [isLogin, setIsLogin] = useState(true);

  const handleClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <header className="sticky top-0 border-t-4 border-t-orange-600 bg-gray-50 border-b h-16 z-10">
      <div className="container flex items-center h-full">
        <h1 className="flex-none mb-2">
          <LogoText />
        </h1>
        <div className="flex-none mx-4">
          <TopNav isLogin={isLogin} />
        </div>
        <div className="flex-1 mx-1">
          <SearchInput />
        </div>
        <div className="flex-none mx-1">
          <UserNav isLogin={isLogin} onLogout={handleClickLogout} />
        </div>
      </div>
    </header>
  );
}

export default Header;
