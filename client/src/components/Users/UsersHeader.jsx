import { BsSearch } from 'react-icons/bs';

function UsersHeader() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-medium mb-6 text-left">Users</h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative">
          <BsSearch className="absolute left-0 top-2 text-gray-500 text-lg mx-3" />
          <input
            className="border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7] pl-10"
            type="text"
            placeholder="Filter by user"
            disabled
          />
        </div>

        {/* <div className=" border border-[#6a737c] rounded text-sm">
          <button
            type="button"
            className="bg-[#e3e6e8] text-[#3b4045] py-2 px-2  rounded-l border-r border-[#6a737c]"
          >
            Reputation
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c]  hover:bg-[#edeff1]"
          >
            New users
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c] hover:bg-[#edeff1]"
          >
            Voters
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c] hover:bg-[#edeff1]"
          >
            Editors
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-[#6a737c] hover:bg-[#edeff1]"
          >
            Moderators
          </button>
        </div> */}
      </div>
    </>
  );
}

export default UsersHeader;
