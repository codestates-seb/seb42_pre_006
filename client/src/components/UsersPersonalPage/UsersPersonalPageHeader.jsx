import { MdCake, MdEmail, MdLocationPin } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

import { useContext } from 'react';
import UsersPersonalPageHeaderButton from './UsersPersonalPageHeaderButton';
import { AuthContext } from '../../context/auth-context';

function UsersPersonalPageHeader({ user }) {
  const { pathname } = useLocation();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section className="relative">
      <div className="flex items-center">
        <img
          className="rounded w-28 h-28 shadow-gray-200 shadow-xl"
          src="https://source.unsplash.com/random/200x200"
          alt={user.displayName}
        />

        <div className="ml-4 text-left">
          <div className="mb-2">
            <h2 className="text-3xl font-medium mb-2">{user.displayName}</h2>
            <p className="flex items-center">
              <MdEmail className="mr-2" />
              <span>{user.email}</span>
            </p>
            {user.location && (
              <p className="flex items-center">
                <MdLocationPin className="mr-2" />
                <span>{user.location}</span>
              </p>
            )}
          </div>
          <ul className="flex text-[#6a737c] text-sm">
            <li className="flex justify-center items-center mr-2">
              <MdCake className="mr-1" />
              <span>Member for 4 days</span>
            </li>
            <li className="flex justify-center items-center mr-2">
              <AiOutlineClockCircle className="mr-1" />
              <span>Last seen this week</span>
            </li>
            <li className="flex justify-center items-center mr-2">
              <BiCalendar className="mr-1" />
              <span>Visited 4 days, 4 consecutive</span>
            </li>
          </ul>
        </div>
      </div>
      {/** TODO: 로그인 및 회원 로그인 기능 구현후 본인 글에만 버튼 노출 */}
      {isLoggedIn && !pathname.includes('edit') && (
        <UsersPersonalPageHeaderButton />
      )}
    </section>
  );
}

export default UsersPersonalPageHeader;
