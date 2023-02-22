import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuestionBodyBtns({ answerId }) {
  // async function getDelete(el) {
  //   try {
  //     await axios.delete(`/answer/${el}`);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleAnswerDelete = async el => {
    try {
      await axios.delete(`/answer/${el}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const AnswerDelete = el => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      handleAnswerDelete(el);
    } else {
      console.log();
    }
  };

  const onAnswerDelete = () => {
    AnswerDelete(answerId);
  };
  
  // onClick={() => {onClick(answerContent)}}

// onClick을 주고 버튼을 누르면 quill에 포커싱 되고, quill에 해당 answerContent를 불러 오기
// type이 patch인 경우 patch로 보내기
// type이 post인 경우 post로 보내기 
// edit 버튼을 누르면 setType('patch')가 되고, type이 변경되기
// 그 변경된 값을 전달해서ㅅ


  return (
    <div className="h-6 flex text-gray-500 text-sm font-medium">
      <div className="mt-1 mr-2.5 mb-1 hover:text-gray-400">Share</div>
      <Link to={`/answeredit/${answerId}`}>
        <button type='button' className="mt-1 mr-2.5 mb-1 hover:text-gray-400" >Edit</button>
      </Link>
      <button
        type="button"
        className="mt-1 mr-2.5 mb-1 hover:text-gray-400"
        onClick={onAnswerDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default QuestionBodyBtns;
