import { BsSearch } from 'react-icons/bs';

function Search() {
  return (
    <section>
      <div className="m-2 relative">
        <BsSearch className="absolute left-0 top-2 text-gray-500 text-lg mx-3" />
        <input
          className="w-full border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7] pl-10"
          type="text"
          placeholder="Search..."
        />
      </div>
    </section>
  );
}

export default Search;
