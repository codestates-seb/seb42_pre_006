import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import Button from '../UI/Button';

function QuestionsHeader({ total }) {
  return (
    <section className="mb-3">
      <div className="flex content-center justify-between mb-6">
        <h1 className="text-3xl font-medium ml-6">All Questions</h1>

        <Link to="/ask">
          <Button variant="primary" size="md">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className=" flex content-center justify-between">
        <span className="text-lg ml-6">{total} questions</span>
        {/* TODO: 질문리스트 데이터 랜더링기능 작업 -> 더미 데이터 실시간 업데이트 */}
        {/* 필터 */}
        {/* <div className=" border border-[#6a737c] rounded text-xs">
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
        </div> */}
      </div>
    </section>
  );
}

export default QuestionsHeader;
