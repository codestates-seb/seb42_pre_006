import { MdCake } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import UsersPersonalPageHeaderButton from './UsersPersonalPageHeaderButton';

function UsersPersonalPageHeader() {
  return (
    <section className="relative">
      <div className="flex items-center">
        {/* TODO: 마이페이지 사진작업 -> 데이터에서 사진 주소 불러오기 */}
        <img
          className="rounded w-28 h-28"
          src="https://lh3.googleusercontent.com/a/AEdFTp4WLLEwuSbw_4TUJ_Cv3mcv7u73xF8EnLmV2X2gZQ=k-s192"
          alt="user images"
        />
        <div className="ml-4">
          <h2 className="text-3xl font-medium mb-2">Mia Lee</h2>
          <ul className="flex text-[#6a737c] text-sm">
            <li className="flex justify-center items-center mr-2">
              <MdCake className="mr-1" />
              <span>Member for 4 days</span>
            </li>
            <li className="flex justify-center items-center mr-2">
              <AiOutlineClockCircle className="mr-1" />
              <span>Last seen this week</span>
            </li>
            {/* TODO: 캘린더 링크작업 -> 링크 누르면 캘린더셀렉창 띄우기 */}
            <li className="flex justify-center items-center mr-2">
              <BiCalendar className="mr-1" />
              <span>Visited 4 days, 4 consecutive</span>
            </li>
          </ul>
        </div>
      </div>
      <UsersPersonalPageHeaderButton />
    </section>
  );
}

export default UsersPersonalPageHeader;
