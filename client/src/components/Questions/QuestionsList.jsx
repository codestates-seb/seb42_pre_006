import React from 'react';

function QuestionsList({ questionTitle, questionStatus, viewCount, questionVoteCount, displayName, createdAt }) {

  return (
    <ul className=" text-left">
      <li className="flex w-full h-full border-b py-6 px-8">
        {/* 투표수, 답변수, 조회수 */}
        <div className="flex w-48 flex-col text-xs mr-4 text-right">
          <p className="mt-1 mb-2 font-medium">{questionVoteCount} votes</p>
          <p className="text-gray-600 mb-2">{questionStatus} answers</p>
          <p className="text-gray-600">{viewCount} views</p>
        </div>

        <div className=" flex flex-8 flex-col">
          {/* 타이틀 & 본문 */}
          <div>
            <h4 className="flex text-lg text-[#0063bf] font-medium cursor-pointer hover:text-[#0A95FF]">
              {questionTitle}
            </h4>
            <p className="flex text-sm">
              Now I somehow need to preserve relations, so for example, if I
              have a table users that has person_id (bigint) column, this should
              get migrated to person_id (uuid) and maintain the relationship.
              How can I do this without losing any data?
            </p>
          </div>

          <div className="flex justify-between items-center">
            {/* 태그 */}
            <div className="mt-2">
              <button
                type="button"
                className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
              >
                tag1
              </button>
              <button
                type="button"
                className="mr-2 text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
              >
                tag2
              </button>
              <button
                type="button"
                className="text-sm text-[#39739d] bg-[#E1ECF4] px-2 py-1 rounded hover:bg-[#cfdbe5]"
              >
                tag3
              </button>
            </div>

            {/* 프로필 */}
            <div className="right-8 bottom-8">
              <img
                className="w-4 h-4 inline mr-1"
                src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
                alt="user_image"
              />
              <span className="text-xs">
                {displayName} <strong>450</strong> asked {createdAt}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default QuestionsList;
