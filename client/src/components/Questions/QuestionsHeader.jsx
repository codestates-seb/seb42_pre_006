import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

function QuestionsHeader() {
  return (
    <section>
      <div className="flex content-center justify-between mx-8 my-8">
        <h1 className="text-3xl font-medium">All Questions</h1>

        {/* TODO: 버튼 라우터기능 작업 -> [질문작성페이지]로 이동 */}
        <Link to="/ask">
          <button
            type="button"
            className="text-xs bg-[#0A95FF] hover:bg-[#0074CC] text-white font-semibold py-2.5 px-3 border-t-2 border-[#47aefd] hover:border-[#47aefd] rounded"
          >
            Ask Question
          </button>
        </Link>
      </div>

      <div className=" flex content-center justify-between mx-8 my-3">
        {/* TODO: 질문갯수 업데이트기능 작업 -> 데이터갯수로 실시간 상태변경 */}
        <span className="text-lg">123,456,789 questions</span>

        {/* TODO: 질문리스트 데이터 랜더링기능 작업 -> 더미 데이터 실시간 업데이트 */}
        <div className=" border border-[#6a737c] rounded text-xs">
          <button
            type="button"
            className="bg-[#e3e6e8] text-[#3b4045] py-2 px-2  rounded-l border-r border-[#6a737c]"
          >
            Newest
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c]  hover:bg-[#edeff1]"
          >
            Active
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c] hover:bg-[#edeff1]"
          >
            Bountied
            <span className="bg-[#0074cc] font-semibold text-white py-0 px-1 rounded mx-1">
              292
            </span>
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 border-r border-[#6a737c] hover:bg-[#edeff1]"
          >
            Unanswered
          </button>
          <button
            type="button"
            className="text-[#6a737c] py-2 px-2 hover:bg-[#edeff1]"
          >
            More
            <IoMdArrowDropdown className="inline" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuestionsHeader;
