import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuestionBodyBtns({ answerId }) {
  async function getDelete(el) {
    try {
      await axios.delete(`/answer/${el}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  function onRemoveAlert(el) {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      getDelete(el);
    } else {
      console.log();
    }
  }

  function deletePostHandle() {
    onRemoveAlert(answerId);
  }

  return (
    <div className="h-6 flex text-gray-500 text-sm font-medium">
      <div className="mt-1 mr-2.5 mb-1 hover:text-gray-400">Share</div>
      <Link to="/edit">
        <div className="mt-1 mr-2.5 mb-1 hover:text-gray-400">Edit</div>
      </Link>
      <div className="mt-1 mr-2.5 mb-1 hover:text-gray-400">Follow</div>
      <button
        type="button"
        className="mt-1 mr-2.5 mb-1 hover:text-gray-400"
        onClick={deletePostHandle}
      >
        Delete
      </button>
    </div>
  );
}

export default QuestionBodyBtns;
