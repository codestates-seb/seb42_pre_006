import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { FiBookmark, FiClock } from "react-icons/fi";

const QuestionVote = () => {
  return (
    <article className=" flex flex-col justify-center items-center  text-gray-400">
      <div className="">
        <button className=" text-7xl">
          <MdArrowDropUp />
        </button>
        <div className="text-gray-500  font-medium text-xl">0</div>
        <button className=" text-7xl ">
          <MdArrowDropDown />
        </button>
      </div>
      <div>
        <FiBookmark className=" text-lg mb-3" />
        <FiClock className=" text-lg" />
      </div>
    </article>
  );
};

export default QuestionVote;
