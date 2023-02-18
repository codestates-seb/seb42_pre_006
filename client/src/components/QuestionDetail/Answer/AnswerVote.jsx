import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { FiBookmark, FiClock } from "react-icons/fi";

const AnswerVote = () => {
  return (
    <article className=" flex flex-col justify-top items-center  text-gray-300  -ml-5 -mr-1">
      <div className="">
        <button className=" text-7xl ">
          <MdArrowDropUp className=" -mb-6" />
        </button>
        <div className="text-gray-500  font-medium text-xl">0</div>
        <button className=" text-7xl ">
          <MdArrowDropDown className=" -mt-4 -mb-5" />
        </button>
      </div>
      <div>
        <FiBookmark className=" text-xl mb-3" />
        <FiClock className=" text-xl" />
      </div>
    </article>
  );
};

export default AnswerVote;
