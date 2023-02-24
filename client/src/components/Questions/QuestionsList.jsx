import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from '../../utils/dateFormat';
import Badge from '../UI/Badge';

function QuestionsList({
  question: {
    questionId,
    questionTitle,
    questionContent,
    viewCount,
    questionVoteCount,
    displayName,
    createAt,
    modifiedAt,
    member,
  },
}) {
  const answerCount = 1;
  const content = questionContent.replace(/(<([^>]+)>)/gi, '');

  return (
    <ul className=" text-left">
      <li className="flex flex-wrap w-full h-full border-b py-6 px-8">
        {/* 투표수, 답변수, 조회수 */}
        <div className="flex w-28 flex-col text-xs pr-4 text-right">
          <p className="mt-1 mb-2 font-medium">{questionVoteCount} votes</p>
          <p className="text-gray-600 mb-2">
            {answerCount > 0 ? (
              <Badge variant="answered">{answerCount} answers</Badge>
            ) : (
              <span> {answerCount} answers</span>
            )}
          </p>
          <p className="text-gray-600">{viewCount} views</p>
        </div>
        <div className="flex flex-1 flex-col">
          {/* 타이틀 & 본문 */}
          <div>
            <h4 className="flex text-lg text-[#0063bf] font-medium cursor-pointer hover:text-[#0A95FF] line-clamp-1">
              <Link to={`/questions/${questionId}`}>{questionTitle}</Link>
            </h4>
            {content && (
              <div className="text-sm my-2 line-clamp-2">{content}</div>
            )}
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
                {member && (
                  <Link to={`/users/${member.memberId}`} className="text-link">
                    <span>{displayName || 'anonymous'} </span>
                  </Link>
                )}
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

export default React.memo(QuestionsList);
