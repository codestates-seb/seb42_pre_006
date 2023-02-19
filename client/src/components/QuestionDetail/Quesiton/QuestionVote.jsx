import React, { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { TbClock } from "react-icons/tb";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";

const QuestionVote = () => {
  const [upVoteValue, setUpVoteValue] = useState(false);
  const [downVoteValue, setDownVoteValue] = useState(false);
  const [bookMark, setBookMark] = useState(false);

  const onUpVoteValueHandler = () => {
    setUpVoteValue((prev) => !prev);
  };

  const onDownVoteValueHandler = () => {
    setDownVoteValue((prev) => !prev);
  };

  const onBookMarkHandler = () => {
    setBookMark((prev) => !prev);
  };

  return (
    <article className=" flex flex-col justify-top items-center  text-gray-300  -ml-5 -mr-1">
      <div className="">
        {upVoteValue ? (
          <button className=" text-7xl ">
            <MdArrowDropUp
              className=" -mb-6 text-orange-400"
              onClick={onUpVoteValueHandler}
            />
          </button>
        ) : (
          <button className=" text-7xl ">
            <MdArrowDropUp className=" -mb-6" onClick={onUpVoteValueHandler} />
          </button>
        )}
        <div className="text-gray-500  font-medium text-xl">
          0 {/* 투표수 반영 기능 작업 */}
        </div>
        {downVoteValue ? (
          <button className=" text-7xl ">
            <MdArrowDropDown
              className=" -mt-4 -mb-5 text-orange-400"
              onClick={onDownVoteValueHandler}
            />
          </button>
        ) : (
          <button className=" text-7xl ">
            <MdArrowDropDown
              className=" -mt-4 -mb-5"
              onClick={onDownVoteValueHandler}
            />
          </button>
        )}
      </div>
      <div>
        {bookMark ? (
          <MdOutlineBookmark
            className=" text-2xl mb-2 text-orange-400"
            onClick={onBookMarkHandler}
          />
        ) : (
          <MdOutlineBookmarkBorder
            className=" text-2xl mb-2"
            onClick={onBookMarkHandler}
          />
        )}

        <TbClock className=" text-2xl py-0.5 hover:text-blue-300" />
      </div>
    </article>
  );
};

export default QuestionVote;
