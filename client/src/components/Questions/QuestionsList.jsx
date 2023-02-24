import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from '../../utils/dateFormat';

function QuestionsList({
  question: {
    questionId,
    questionTitle,
    questionStatus,
    viewCount,
    questionVoteCount,
    displayName,
    createAt,
    modifiedAt,
  },
}) {
  return (
    <ul className=" text-left">
      <li className="flex flex-wrap w-full h-full border-b py-6 px-8">
        {/* 투표수, 답변수, 조회수 */}
        <div className="flex w-40 flex-col text-xs pr-4 text-right">
          <p className="mt-1 mb-2 font-medium">{questionVoteCount} votes</p>
          <p className="text-gray-600 mb-2">{questionStatus} answers</p>
          <p className="text-gray-600">{viewCount} views</p>
        </div>
        <div className="flex flex-1 flex-col">
          {/* 타이틀 & 본문 */}
          <div>
            <h4 className="flex text-lg text-[#0063bf] font-medium cursor-pointer hover:text-[#0A95FF]">
              <Link to={`/questions/${questionId}`}>{questionTitle}</Link>
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
                src={`https://picsum.photos/id/${questionId}/200/200`}
                alt={questionId}
                className="w-4 h-4 inline mr-1"
              />
              <span className="text-xs">
                {displayName} <strong>450</strong>
                {modifiedAt !== createAt ? (
                  <> modified {dateFormat(modifiedAt)} </>
                ) : (
                  <> asked {dateFormat(createAt)} </>
                )}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default QuestionsList;
