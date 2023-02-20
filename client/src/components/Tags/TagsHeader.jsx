import { BsSearch } from 'react-icons/bs';
function TagsHeader() {
  return (
    <section>
      <div className="text-left">
        <h1 className="text-3xl font-medium mb-4">Tags</h1>
        <div>
          <p className="text-sm">
            A tag is a keyword or label that categorizes your question with
            other, similar questions.
          </p>
          <p className="text-sm">
            Using the right tags makes it easier for others to find and answer
            your question.
          </p>
        </div>
        <p className="text-sm text-blue-600 py-4">Show all tag synonyms</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative">
          <BsSearch className="absolute left-0 top-2 text-gray-500 text-lg mx-3" />
          <input
            className="border rounded px-2 py-2 text-sm focus:border focus:border-[#58A4DE] outline-offset-4 outline-[#DDEAF7] pl-10"
            type="text"
            placeholder="Filter by tag name"
          />
        </div>

        <div className=" border border-[#6a737c] rounded text-sm">
          <button
            type="button"
            className="bg-[#e3e6e8] text-[#3b4045] py-2 px-2  rounded-l border-r border-[#6a737c]"
          >
            Popular
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c]  hover:bg-[#edeff1]"
          >
            Name
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-[#6a737c] hover:bg-[#edeff1]"
          >
            New
          </button>
        </div>
      </div>
    </section>
  );
}

export default TagsHeader;
