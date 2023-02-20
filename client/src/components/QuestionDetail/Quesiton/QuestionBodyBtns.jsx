import React from 'react';
import { Link } from 'react-router-dom';

function QuestionBodyBtns() {
  return (
    <div className=" h-6  flex text-gray-500 text-sm font-medium">
      <div className=" mt-1 mr-2.5 mb-1 hover:text-gray-400">Share</div>
      <Link to="/edit">
        <div className=" mt-1 mr-2.5 mb-1 hover:text-gray-400">Edit</div>
      </Link>
      <div className=" mt-1 mr-2.5 mb-1 hover:text-gray-400">Follow</div>
      <div className=" mt-1 mr-2.5 mb-1 hover:text-gray-400">Remove</div>
    </div>
  );
};

export default QuestionBodyBtns;
