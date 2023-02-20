import UsersListCategory from './UsersListCategory';

function UsersList() {
  return (
    <section className="mt-4">
      {/* TODO: 링크 기능작업 -> 각 유저 프로필 클릭 시 [UserPersonalPage]로 이동 */}
      <UsersListCategory />
      <ul className="flex justify-between">
        <li className="w-1/4 text-sm mb-2 mr-2 flex justify-center items-center">
          <img
            className="w-14 h-14 rounded"
            src="https://lh3.googleusercontent.com/a/AEdFTp4WLLEwuSbw_4TUJ_Cv3mcv7u73xF8EnLmV2X2gZQ=k-s192"
            alt="userImage"
          />
          <div className="flex flex-col m-1">
            <span className="text-blue-700 text-base font-medium">Mia Lee</span>
            <span className="">Korea</span>
            <span className="text-xs text-blue-700">JavaScript, React.js</span>
          </div>
        </li>
        <li className="w-1/4 text-sm mb-2 mr-2 flex justify-center items-center">
          <img
            className="w-14 h-14 rounded"
            src="https://lh3.googleusercontent.com/a/AEdFTp4WLLEwuSbw_4TUJ_Cv3mcv7u73xF8EnLmV2X2gZQ=k-s192"
            alt="userImage"
          />
          <div className="flex flex-col m-1">
            <span className="text-blue-700 text-base font-medium">Mia Lee</span>
            <span className="">Korea</span>
            <span className="text-xs text-blue-700">JavaScript, React.js</span>
          </div>
        </li>
        <li className="w-1/4 text-sm mb-2 mr-2 flex justify-center items-center">
          <img
            className="w-14 h-14 rounded"
            src="https://lh3.googleusercontent.com/a/AEdFTp4WLLEwuSbw_4TUJ_Cv3mcv7u73xF8EnLmV2X2gZQ=k-s192"
            alt="userImage"
          />
          <div className="flex flex-col m-1">
            <span className="text-blue-700 text-base font-medium">Mia Lee</span>
            <span className="">Korea</span>
            <span className="text-xs text-blue-700">JavaScript, React.js</span>
          </div>
        </li>
        <li className="w-1/4 text-sm mb-2 flex justify-center items-center">
          <img
            className="w-14 h-14 rounded"
            src="https://lh3.googleusercontent.com/a/AEdFTp4WLLEwuSbw_4TUJ_Cv3mcv7u73xF8EnLmV2X2gZQ=k-s192"
            alt="userImage"
          />
          <div className="flex flex-col m-1">
            <span className="text-blue-700 text-base font-medium">Mia Lee</span>
            <span className="">Korea</span>
            <span className="text-xs text-blue-700">JavaScript, React.js</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default UsersList;
