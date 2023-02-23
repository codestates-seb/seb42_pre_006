import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuestionBodyBtns({ answerId }) {
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

  return (
    <div className="h-6 flex text-gray-500 text-sm font-medium">
      <div className="mt-1 mr-2.5 mb-1 hover:text-gray-400">Share</div>
      <Link to={`/answeredit/${answerId}`}>
        <button type="button" className="mt-1 mr-2.5 mb-1 hover:text-gray-400">
          Edit
        </button>
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
