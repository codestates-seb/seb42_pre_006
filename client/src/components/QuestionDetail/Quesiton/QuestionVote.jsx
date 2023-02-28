import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import {
  MdArrowDropUp,
  MdArrowDropDown,
  MdOutlineBookmarkBorder,
  MdOutlineBookmark,
} from 'react-icons/md';
import { TbClock } from 'react-icons/tb';

function QuestionVote({ question: { questionId, questionVoteCount } }) {
  const [bookMark, setBookMark] = useState(false);
  const [votesCount, setVotesCont] = useState(0);
  const [flagUp, setFlagUp] = useState(false);
  const [flagDown, setFlagDown] = useState(false);

  // TODO : 추후 API 관련 로직 수정하기
  const handleCountUpVotes = async () => {
    try {
      const response = await axios.post(`/questions/${questionId}/vote`, {
        questionVoteStatus: true,
        memberId: 1,
      });
      if (response.data) {
        if (!flagUp) {
          setVotesCont(prevState => prevState + 1);
          setFlagUp(prevState => !prevState);
        }
      }
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response);
        setFlagUp(prevState => !prevState);
        setVotesCont(prevState => prevState - 1);
      }
    }
  };

  const handleCountDownVotes = async () => {
    try {
      const response = await axios.post(`/questions/${questionId}/vote`, {
        questionVoteStatus: true,
        memberId: 1,
      });
      if (response.data) {
        if (!flagDown) {
          setVotesCont(prevState => prevState - 1);
          setFlagDown(prevState => !prevState);
        }
      }
    } catch (error) {
      if (error.response.status === 400) {
        console.log(error.response);
        setFlagDown(prevState => !prevState);
        setVotesCont(prevState => prevState + 1);
      }
    }
  };

  const onBookMarkHandler = () => {
    setBookMark(prevState => !prevState);
  };

  useEffect(() => {
    setVotesCont(questionVoteCount);
  }, [questionVoteCount]);

  return (
    <article className=" flex flex-col justify-top items-center  text-gray-300  -ml-5 -mr-1">
      <div className="">
        <button type="button" onClick={handleCountUpVotes}>
          <MdArrowDropUp
            className={classNames('-mb-6 text-7xl text-gray-300', {
              'text-orange-400': flagUp,
            })}
          />
        </button>
        <div className="text-gray-500  font-medium text-xl">{votesCount}</div>
        <button type="button" onClick={handleCountDownVotes}>
          <MdArrowDropDown
            className={classNames('-mt-4 text-7xl text-gray-300', {
              'text-orange-400': flagDown,
            })}
          />
        </button>
      </div>
      <div>
        <button
          type="button"
          className={classNames('cursor-pointer text-2xl mb-2 ', {
            'text-orange-400': bookMark,
          })}
          onClick={onBookMarkHandler}
        >
          {bookMark ? <MdOutlineBookmark /> : <MdOutlineBookmarkBorder />}
        </button>
        <TbClock className=" text-2xl py-0.5 hover:text-blue-300" />
      </div>
    </article>
  );
}

export default QuestionVote;
