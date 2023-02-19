import classNames from "classnames";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import SearchExpand from "./SearchExpand";

function SearchInput() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFounsSearchInput = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <form>
        <div
          className={classNames("flex items-center border p-1", {
            "shadow-md shadow-sky-400 outline outline-2 outline-sky-400":
              isExpanded,
          })}
        >
          <MdSearch className="text-2xl mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-4 outline-none"
            onClick={handleFounsSearchInput}
          />
        </div>
      </form>
      {isExpanded && <SearchExpand />}
    </div>
  );
}

export default SearchInput;
